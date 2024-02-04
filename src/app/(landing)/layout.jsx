import Link from 'next/link';
import styles from './marketingLayout.module.scss';

const MARKETING_LINKS = [
  {
    link: '/about',
    text: 'about',
  },
  {
    link: '/help',
    text: 'help',
  },
  {
    link: '/roadmap',
    text: 'roadmap',
  },
  {
    link: '/contact',
    text: 'contact',
  },
];

const LEGAL_LINKS = [
  {
    link: '/privacy',
    text: 'privacy',
  },
  {
    link: '/tos',
    text: 'terms',
  },
  {
    link: '/ccpa',
    text: 'collection notice',
  },
  {
    link: '/sitemap',
    text: 'sitemap',
  },
];

export default function LandingLayout({ children }) {
  return (
    <div className={styles.marketingLayout}>
      <header>
        <Link href='/' className={styles.logo}>
          :H<span>elios</span>
        </Link>

        <nav>
          <Link href='/start' className={styles.start}>
            start<span> journey</span>
          </Link>

          <Link href='/continue' className={styles.continue}>
            continue
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <div className={styles.footerWrapper}>
        <div className={styles.marketingLinks}>
          {MARKETING_LINKS.map(({ link, text }) => (
            <Link key={text} href={link}>
              {text}
            </Link>
          ))}
        </div>

        <footer>
          <Link href='/' className={styles.footerName}>
            <span className={styles.prjkt}>prjkt</span>
            :helios
          </Link>

          <div className={styles.legalLinks}>
            {LEGAL_LINKS.map(({ link, text }) => (
              <Link key={text} href={link}>
                {text}
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
