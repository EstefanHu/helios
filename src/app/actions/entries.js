'use server';

import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export async function getEntry(slug) {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM entry WHERE slug = $1', [slug]);

    return res.rows;
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}

export async function getTodaysEntry() {
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
                    WHERE traveler_id = `${ }`;
                  `;
    const { rows } = await client.query(query);

    return { code: 200, payload: rows[0] };
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}

export async function getEntries(userId, limit, offset) {
  const client = await pool.connect();
  const query = 'SELECT * FROM entry WHERE traveler_id = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3';
  try {
    const res = await client.query(query, [userId, limit, offset]);

    return res.rows;
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}

export async function getEntryCount() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT count(*) FROM entry');

    return res.rows[0];
  } catch (error) {
    console.log(error);
  } finally {
    client.release();
  }
}
