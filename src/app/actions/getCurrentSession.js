'use server';
import { cookies } from 'next/headers';
import redis from '@/lib/config/redis.js';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export default async function getCurrentSession() {
  const heliosAuth = cookies().get('heliosAuth')?.value;
  if (!heliosAuth) return { code: 401 };
  const userId = await redis.hget(`heliosUser:${heliosAuth}`, 'userId');
  if (!userId) return { code: 440 };

  const client = await pool.connect();
  try {
    const query = `
                      SELECT
                        traveler.id AS "travelerId",
                        traveler.first_name AS "firstName",
                        traveler.last_name AS "lastName",
                        traveler.email_address AS "emailAddress",
                        traveler.email_confirmed AS "emailConfirmed", 
                        settings.is_dark AS "isDark", 
                        settings.font_family AS "fontFamily"
                      FROM traveler
                      INNER JOIN settings
                      ON traveler.id = settings.traveler_id
                      WHERE traveler.id = '${userId}';
                    `;
    const { rows } = await client.query(query);

    return { code: 200, traveler: rows[0] };
  } catch (error) {
    return { error }, { status: 500 };
  } finally {
    client.release();
  }
}
