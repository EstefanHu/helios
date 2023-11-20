import Link from 'next/link';

import { RxDashboard } from 'react-icons/rx';
import { CgWebsite } from 'react-icons/cg';
import { FiInbox } from 'react-icons/fi';

import {
  AppLinks,
  AppNav,
  MenuUserDetails,
  MobileAppNav,
  Notifications,
  PageName,
  SignOut,
} from './AppLayoutClientComponents';

import styles from './layout.module.scss';

export default function AppLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.appNav}>
        <AppNav />
      </nav>

      <main>
        <header>
          <PageName />

          <AppLinks />
        </header>

        <div className={styles.contentWrapper}>
          <div className={styles.content}>{children}</div>
        </div>
      </main>

      <div className={styles.appheaderMenuWrapper} id='menu'>
        <div className={styles.appHeaderMenu}>
          <MenuUserDetails />

          <hr />

          <div className={styles.menuLinks}>
            <Link href='/home' className={styles.link}>
              <RxDashboard />
              <p>home</p>
            </Link>

            <Link href='/inbox' className={styles.link}>
              <FiInbox />
              <p>inbox</p>
            </Link>
          </div>

          <hr />

          <div className={styles.menuLinks}>
            <Link href='/' className={styles.link}>
              <p className={styles.light}>settings</p>
            </Link>

            <SignOut />
          </div>

          <hr />

          <span className={styles.legalLinks}>
            <Link href='/privacy'>Privacy</Link>
            <Link href='/tos'>Terms</Link>
            <Link href='/ccpa'>Collection notice</Link>
          </span>
        </div>
      </div>

      <div className={styles.notificationsMenu} id='notificationsMenu'>
        <div className={styles.notificationsHeader}>
          <p>Notifications</p>
        </div>

        <Notifications />

        <div className={styles.notificationsButtonWrapper}>
          <Link href='/notifications'>See all</Link>
        </div>
      </div>

      <MobileAppNav />
    </div>
  );
}
