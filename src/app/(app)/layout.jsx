import Link from 'next/link';
import { cookies } from 'next/headers';
import { AppNav, MobileAppNav, PageName, SearchInput } from './AppLayoutClientComponents';
import { ContextProvider } from './ContextProvider.jsx';
import Deauth from './Deauth';
import { MdPersonOutline } from 'react-icons/md';
import styles from './layout.module.scss';

import redis from '@/lib/config/redis.js';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export default async function AppLayout({ children }) {
  const heliosAuth = cookies().get('heliosAuth');
  if (!heliosAuth) return <Deauth />;

  const getCurrentSession = async () => {
    'use server';
    const heliosAuth = cookies().get('heliosAuth')?.value;
    if (!heliosAuth) return { code: 401 };
    const userId = await redis.hget(`heliosUser:${heliosAuth}`, 'userId');
    if (!userId) return { code: 440 };

    const client = await pool.connect();
    try {
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
                      WHERE traveler.id = '${userId}';
                    `;
      const { rows } = await client.query(query);

      return { code: 200, traveler: rows[0] };
    } catch (error) {
      return { error }, { status: 500 };
    } finally {
      client.release();
    }
  };

  return (
    <ContextProvider getCurrentSession={getCurrentSession}>
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
