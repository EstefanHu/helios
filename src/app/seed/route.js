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
          id uuid PRIMARY KEY,
          emailAddress VARCHAR(100) UNIQUE NOT NULL,
          emailConfirmed BOOLEAN DEFAULT FALSE,
          firstName VARCHAR(20),
          lastName VARCHAR(20),
          password VARCHAR(200) NOT NULL,
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

    // const garyTheUser = await client.query(`
    //   INSERT INTO hero(emailAddress, firstName, lastName, password)
    //   VALUES ('g.host@gmail.com', 'Gary', 'Host', '$2y$10$VRZ6uIYPCEp6a.JcvWGZgeDlRYU3ZeDIBPM4H6X2NjGApAjOjNfvC')
    // `);

    await client.query('COMMIT');

    return NextResponse.json({ result: { userTable, entryTable } }, { status: 200 });
  } catch (error) {
    console.log(error)
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
