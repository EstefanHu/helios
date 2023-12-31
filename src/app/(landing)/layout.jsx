import Link from 'next/link';
import styles from './marketingLayout.module.scss';

export default function LandingLayout({ children }) {
  return (
    <div className={styles.marketingLayout}>
      <header>
        <Link href='/' className={styles.logo}>
          :H<span>elios</span>
        </Link>

        <span>
          <Link href='/start' className={styles.start}>
            start journey
          </Link>

          <Link href='/continue' className={styles.continue}>
            write
          </Link>
        </span>
      </header>

      <main>{children}</main>
    </div>
  );
}
