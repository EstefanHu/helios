import Link from 'next/link';
import LandingLinks from './LandingLinks';
import { cookies } from 'next/headers';
import redis from '@/lib/config/redis.js';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();
import styles from './marketingLayout.module.scss';

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
    </div>
  );
}
