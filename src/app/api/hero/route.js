import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export async function POST(req) {
  const client = await pool.connect();

  try {
    const queryText = 'INSERT INTO entries() VALUES ($1, $2)';
    const response = await client.query(queryText);

    return NextResponse.json({ response }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release();
  }
}

export async function GET(req) {
  const client = await pool.connect();

  try {
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release();
  }
}

export async function PATCH(req) {
  const client = await pool.connect();

  try {
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release();
  }
}

export async function PUT(req) {
  const client = await pool.connect();

  try {
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release();
  }
}

export async function DELETE(req) {
  const client = await pool.connect();

  try {
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  } finally {
    client.release();
  }
}
