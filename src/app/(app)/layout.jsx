import Link from 'next/link';
import { cookies } from 'next/headers';
import { AppNav, MobileAppNav, PageName } from './AppLayoutClientComponents';
import Deauth from './Deauth';

import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

import styles from './layout.module.scss';

export default async function AppLayout({ children }) {
  const heliosAuth = cookies().get('heliosAuth');
  if (!heliosAuth) return <Deauth />;
  const client = await pool.connect();

  return (
    <div className={styles.wrapper}>
      <nav className={styles.appNav}>
        <AppNav />
      </nav>

      <main>
        <header>
          <PageName />

          <Link href='/write'>
            <p>write</p>
          </Link>
        </header>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>{children}</div>
        </div>
      </main>

      <MobileAppNav />
    </div>
  );
}
