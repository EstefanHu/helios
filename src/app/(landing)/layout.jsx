import Link from 'next/link';
import LandingLinks from './LandingLinks';
import { cookies } from 'next/headers';
import redis from '@/lib/config/redis.js';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();
import styles from './marketingLayout.module.scss';

const MARKETING_LINKS = [
  {
    link: '/about',
    text: 'about',
  },
  {
    link: '/contact',
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
  const getCurrentSession = async () => {
    'use server';
    const heliosAuth = cookies().get('heliosAuth')?.value;
    if (!heliosAuth) return { code: 401 };
    const userId = await redis.hget(`heliosUser:${heliosAuth}`, 'userId');
    if (!userId) return { code: 440 };

    const client = await pool.connect();
    try {
      const query = `SELECT id, firstName, lastName, emailAddress, emailConfirmed
                  FROM seeker
                  WHERE id = '${userId}'`;
      const { rows } = await client.query(query);

      return { code: 200, seeker: rows[0] };
    } catch (error) {
      return { error }, { status: 500 };
    } finally {
      client.release();
    }
  };

  return (
    <div className={styles.marketingLayout}>
      <header>
        <Link href='/' className={styles.logo}>
          :H<span>elios</span>
        </Link>

        <span>
          <LandingLinks getCurrentSession={getCurrentSession} />
        </span>
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
