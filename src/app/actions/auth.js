'use server';

import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
import { v4 as generateUUID } from 'uuid';
import { ValidateEmailAddress } from '@/lib/helpers/validateEmailAddress.js';
import redis from '@/lib/config/redis.js';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

const setUserSession = async (userId) => {
  const token = generateUUID();
  const key = `heliosUser:${token}`;
  const repeatedToken = await redis.exists(key);
  if (repeatedToken === 1) return setUserSession(userId);
  await redis.hset(key, 'userId', userId);
  await redis.expire(key, Number(process.env.SESSIONS_TTL));
  console.log('setting cookie');
  cookies().set({
    name: 'heliosAuth',
    value: token,
    maxAge: process.env.SESSIONS_TTL,
    sameSite: 'Strict',
    path: '/',
    httpOnly: `${process.env.NODE_ENV !== 'development' && '; Secure'}`,
  });
};

export async function startJourney(emailAddress, password) {
  if (!emailAddress || !password || !ValidateEmailAddress(emailAddress)) return { code: 400, message: 'bad request' };
  const client = await pool.connect();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO traveler(email_address, password) VALUES ($1, $2) RETURNING id;';
    const { rows } = await client.query(query, [emailAddress, hashedPassword]);
    await setUserSession(rows[0].id);

    return { code: 201, message: 'traveler created' };
  } catch (error) {
    const { code, column } = error;
    switch (code) {
      case '23502':
        return { code: 400, message: `Missing field: ${column}` };
      case '23505':
        return { code: 409, message: 'email address already in use' };
      default:
        return { code: 500, message: 'traveler creation failed' };
    }
  } finally {
    client.release();
  }
}

export async function continueJourney(emailAddress, password) {
  if (!emailAddress || !password || !ValidateEmailAddress(emailAddress)) return { code: 400, message: 'bad request' };
  const client = await pool.connect();

  try {
    const query = `SELECT id, password FROM traveler WHERE email_address = '${emailAddress}';`;
    const { rows } = await client.query(query);
    if (rows.length === 0) throw 'failed authentication';
    if (!(await bcrypt.compare(password, rows[0].password))) throw 'failed authentication';
    await setUserSession(rows[0].id);

    return { code: 200, message: 'continuing journey' };
  } catch (error) {
    return { code: 401 };
  } finally {
    client.release();
  }
}
