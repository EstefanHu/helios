import Link from 'next/link';
import { cookies } from 'next/headers';
import { MdPersonOutline } from 'react-icons/md';
import { AppNav, MobileAppNav, PageName, SearchInput } from './AppLayoutClientComponents';
import Deauth from './Deauth';
import { ContextProvider } from './ContextProvider.jsx';
import redis from '@/lib/config/redis.js';
import { connectToDatabase } from '@/lib/config/postgres.js';
import styles from './layout.module.scss';

const { pool } = connectToDatabase();

export default async function AppLayout({ children }) {
  const heliosAuth = cookies().get('heliosAuth');
  if (!heliosAuth) return <Deauth />;
  const travelerId = await redis.hget(`heliosTraveler:${heliosAuth.value}`, 'travelerId');
  if (!travelerId) return <Deauth />;

  const client = await pool.connect();
  const query = `
                  SELECT
                    traveler.id AS "travelerId",
                    traveler.first_name AS "firstName",
                    traveler.last_name AS "lastName",
                    traveler.email_address AS "emailAddress",
                    traveler.email_confirmed AS "emailConfirmed", 
                    settings.is_dark AS "isDark", 
                    settings.font_family AS "fontFamily"
                  FROM traveler
                  INNER JOIN settings
                  ON traveler.id = settings.traveler_id
                  WHERE traveler.id = '${travelerId}';
                `;
  const { rows } = await client.query(query);

  return (
    <ContextProvider currentSession={rows[0]}>
      <div className={styles.wrapper}>
        <nav className={styles.appNav}>
          <AppNav />
        </nav>

        <main>
          <header>
            <PageName />

            <div className={styles.search}>
              <SearchInput />
            </div>

            <Link href='/profile'>
              <MdPersonOutline />
            </Link>
          </header>

          <div className={styles.contentWrapper}>
            <div className={styles.content}>{children}</div>
          </div>
        </main>

        <MobileAppNav />
      </div>
    </ContextProvider>
  );
}
