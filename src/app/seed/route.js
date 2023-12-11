import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export async function POST() {
  if (process.env.NODE_ENV === 'production') return NextResponse.json({ status: 403 });
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const userTable = await client.query(`
        CREATE TABLE IF NOT EXISTS hero (
          id SERIAL PRIMARY KEY,
          firstName VARCHAR(255) NOT NULL,
          lastName VARCHAR(255) NOT NULL,
          emailAddress VARCHAR(255) UNIQUE NOT NULL,
          emailConfirmed BOOLEAN DEFAULT FALSE,
          password VARCHAR(255),
          createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);

    const entryTable = await client.query(`
      CREATE TABLE IF NOT EXISTS entry (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255),
        body VARCHAR(255),
        createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        hero_id INTEGER,
        CONSTRAINT fk_hero FOREIGN KEY(hero_id) REFERENCES hero(id)
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
    await client.query('DROP TABLE IF EXISTS entry');
    await client.query('DROP TABLE IF EXISTS hero');
    await client.query('COMMIT');

    return NextResponse.json({ status: 200 });
  } catch (error) {
    await client.query('ROLLBACK');

    return NextResponse.json({ status: 500 });
  } finally {
    client.release();
  }
}
