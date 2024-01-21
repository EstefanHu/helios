'use server';

import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export async function getEntries(userId) {
  const client = await pool.connect();
  const query = 'SELECT * FROM entry WHERE seeker_id = $1 ORDER BY created_at DESC'
  try {
    const res = await client.query(query, [userId])  
    return res.rows
  } catch (error) {
    console.log(error)
  }  finally {
    client.release();
  }
}

export async function getEntry(entryId) {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM entry WHERE id = $1', [entryId])  
    return res.rows
  } catch (error) {
    console.log(error)
  }  finally {
    client.release();
  }
}