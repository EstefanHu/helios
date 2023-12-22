import Link from 'next/link';
import { AppNav, MobileAppNav, PageName } from './AppLayoutClientComponents';
import styles from './layout.module.scss';

export default function AppLayout({ children }) {
  const getSeeker = async () => {
    'use server';
    console.log('GETTING Seeker');
  };

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
