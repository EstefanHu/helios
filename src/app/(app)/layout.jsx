import Link from 'next/link';
import { cookies } from 'next/headers';
import { AppNav, MobileAppNav, PageName, SearchInput } from './AppLayoutClientComponents';
import Deauth from './Deauth';
import { MdPersonOutline } from 'react-icons/md';
import styles from './layout.module.scss';

export default async function AppLayout({ children }) {
  const heliosAuth = cookies().get('heliosAuth');
  if (!heliosAuth) return <Deauth />;

  return (
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
  );
}
