'use server';

import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export default async function getHomeContent(travelerId) {
  const client = await pool.connect();

  try {
    const getRecentQuery = `
                      SELECT
                        title,
                        created_at as "createAt",
                        updated_at as "updatedAt",
                        'entry' as "type"
                      FROM entry
                      WHERE traveler_id = '${travelerId}'
                      AND journey_id IS NULL
                      AND updated_at::date = (CURRENT_DATE - 1)

                      UNION

                      SELECT
                        title,
                        created_at as "createAt",
                        updated_at as "updatedAt",
                        'journey' as "type"
                      FROM journey
                      WHERE traveler_id = '${travelerId}'
                      AND NOW() < end_date

                      ORDER BY "updatedAt";
                    `;
    const { rows } = await client.query(getRecentQuery);

    return { code: 200, response: rows };
  } catch (error) {
    console.log({ error });
  } finally {
    client.release();
  }
}
