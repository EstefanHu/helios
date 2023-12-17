import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/config/postgres.js';
import { FORBIDDEN, CREATED } from '@/lib/constants/httpResponses.js';
const { pool } = connectToDatabase();

export async function POST() {
  if (process.env.NODE_ENV === 'production') return NextResponse.json(FORBIDDEN);
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    await client.query(`
        CREATE TABLE IF NOT EXISTS hero (
          id SERIAL PRIMARY KEY,
          emailAddress VARCHAR(100) UNIQUE NOT NULL,
          emailConfirmed BOOLEAN DEFAULT FALSE,
          firstName VARCHAR(50),
          lastName VARCHAR(50),
          password VARCHAR(100) NOT NULL,
          createdAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    await client.query(`
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
    await client.query(`
      INSERT INTO hero(emailAddress, firstName, lastName, password)
      VALUES ('g.host@gmail.com', 'Gary', 'Host', '$2b$10$RkQSoUqiyHCvQ06/Ak7mEeBm0zFKtA2ucWRf9AvrU2Fe50fOXo5bi')
    `);
    await client.query(`
      INSERT INTO hero(emailAddress, firstName, lastName, password)
      VALUES ('your.mom@gmail.com', 'Your', 'Mom', '$2b$10$RkQSoUqiyHCvQ06/Ak7mEeBm0zFKtA2ucWRf9AvrU2Fe50fOXo5bi')
    `);
    await client.query('COMMIT');

    return NextResponse.json(CREATED);
  } catch (error) {
    console.log(error);
    await client.query('ROLLBACK');

    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release();
  }
}

export async function DELETE() {
  if (process.env.NODE_ENV === 'production') return NextResponse.json(FORBIDDEN);
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
