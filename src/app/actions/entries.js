'use server';

import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export async function getEntries() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT * FROM entry WHERE seeker_id = 1 LIMIT 3')  
    return res.rows
  } catch (error) {
    console.log(error)
  }  finally {
    client.release();
  }
}