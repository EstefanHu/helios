'use server';

import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export async function getEntry(slug) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT * FROM entry WHERE slug = $1', [slug]);
    return { code: 200, entry: rows[0] }
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}

export async function getTodaysEntry(travelerId) {
  const client = await pool.connect();

  try {
    const query = `
                    SELECT
                      id,
                      title,
                      slug,
                      body,
                      created_at
                    FROM entry
                    WHERE traveler_id = $1`;
    const { rows } = await client.query(query, [travelerId]);

    return { code: 200, payload: rows[0] };
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}

export async function getEntries(travelerId, limit, offset) {
  const client = await pool.connect();
  const query = 'SELECT * FROM entry WHERE traveler_id = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3';
  try {
    const { rows } = await client.query(query, [travelerId, limit, offset]);
    return { code: 200, entries: rows[0] };
  } catch (error) {
    return { error }, { status: 500 }
  } finally {
    client.release();
  }
}

export async function getEntryCount(travelerId) {
  const client = await pool.connect();
  try {
    const { rows } = await client.query('SELECT count(*) FROM entry WHERE traveler_id = $1', [travelerId]);
    return { code: 200, count: rows[0] };
  } catch (error) {
    return { error }, { status: 500 }
  } finally {
    client.release();
  }
}
