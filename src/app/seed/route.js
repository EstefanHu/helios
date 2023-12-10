import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export async function POST() {
  if (process.env.NODE_ENV === 'production') return NextResponse.json({ status: 403 });
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const userTable = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          firstName VARCHAR(255) NOT NULL,
          lastName VARCHAR(255) NOT NULL,
          emailAddress VARCHAR(255) UNIQUE NOT NULL,
          emailConfirmed BOOLEAN DEFAULT FALSE,
          password VARCHAR(255),
          "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);

    const entryTable = await client.query(`
      CREATE TABLE IF NOT EXISTS entries (
        id SERIAL PRIMARY KEY,
        body VARCHAR(255),
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await client.query('COMMIT');

    return NextResponse.json({ result: { userTable, entryTable } }, { status: 200 });
  } catch (error) {
    await client.query('ROLLBACK');

    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release();
  }
}

export async function DELETE() {
  if (process.env.NODE_ENV === 'production') return NextResponse.json({ status: 403 });
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    await client.query('DROP TABLE IF EXISTS users');
    await client.query('DROP TABLE IF EXISTS entries');
    await client.query('COMMIT');

    return NextResponse.json({ status: 200 });
  } catch (error) {
    await client.query('ROLLBACK');

    return NextResponse.json({ status: 500 });
  } finally {
    client.release();
  }
}
