import styles from './Home.module.scss';
import HomeContent from './HomeContent';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export const metadata = {
  title: 'Home | Helios',
  description: 'Helios home',
};

export default function Home() {
  const fetchHomeContent = async (travelerId) => {
    'use server';
    const client = await pool.connect();

    try {
      const query = `
                      SELECT
                        title,
                        created_at as "createAt",
                        updated_at as "updatedAt"
                      FROM entry
                      WHERE traveler_id = '${travelerId}'
                      AND journey_id IS NULL
                      AND updated_at::date = (CURRENT_DATE - 1)

                      UNION

                      SELECT
                        title,
                        created_at as "createAt",
                        updated_at as "updatedAt"
                      FROM journey
                      WHERE traveler_id = '${travelerId}'
                      AND NOW() < end_date

                      ORDER BY "updatedAt";
                    `;
      const { rows } = await client.query(query);

      return { code: 200, response: rows };
    } catch (e) {
      return { code: 500 };
    } finally {
      client.release();
    }
  };

  return (
    <div className={styles.homeWrapper}>
      <HomeContent fetchHomeContent={fetchHomeContent} />
    </div>
  );
}
