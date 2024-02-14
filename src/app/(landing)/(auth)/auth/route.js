import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { v4 as generateUUID } from 'uuid';
import bcrypt from 'bcrypt';
import { BAD_REQUEST, CREATED, INVALID_REQUEST, SERVER_ERROR, SUCCESS } from '@/lib/constants/httpResponses.js';
import redis from '@/lib/config/redis.js';
import { connectToDatabase } from '@/lib/config/postgres.js';
import { ValidateEmailAddress } from '@/lib/helpers/validateEmailAddress.js';
const { pool } = connectToDatabase();

const setUserSession = async (userId) => {
  const token = generateUUID();
  const key = `heliosUser:${token}`;
  const repeatedToken = await redis.exists(key);
  if (repeatedToken === 1) return setUserSession(userId);
  await redis.hset(key, 'userId', userId);
  await redis.expire(key, Number(process.env.SESSIONS_TTL));

  return token;
};

export async function POST(req) {
  const { emailAddress, password } = await req.json();
  if (!emailAddress || !password) return new NextResponse(BAD_REQUEST);
  if (!ValidateEmailAddress(emailAddress)) return new NextResponse(BAD_REQUEST);
  const client = await pool.connect();

  try {
    const { rows } = await client.query(`SELECT * FROM traveler WHERE email_address = '${emailAddress}'`);
    if (rows.length === 0) return new NextResponse(INVALID_REQUEST);
    const user = rows[0];
    if (!(await bcrypt.compare(password, user.password))) return new NextResponse(INVALID_REQUEST);
    const sessionToken = await setUserSession(user.id);

    return new NextResponse(CREATED, {
      headers: {
        'Set-Cookie': `heliosAuth=${sessionToken}; Max-Age=${
          process.env.SESSIONS_TTL
        }; SameSite=Strict; Path=/; HttpOnly ${process.env.NODE_ENV !== 'development' && '; Secure'}`,
      },
    });
  } catch (error) {
    return new NextResponse(SERVER_ERROR, {
      headers: {
        'Set-Cookie': 'heliosAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict; Path=/; Max-Age=0;',
      },
    });
  } finally {
    client.release();
  }
}

export async function GET(req) {
  const sessionToken = 'noodles';

  return new Response(SUCCESS, {
    headers: {
      'Set-Cookie': `heliosAuth=${sessionToken}; Max-Age=${
        process.env.SESSIONS_TTL
      }; SameSite=Strict; Path=/; HttpOnly ${process.env.NODE_ENV !== 'development' && '; Secure'}`,
    },
  });
}

export async function PATCH(req) {
  return NextResponse.json({ data: 'PATCH' });
}

export async function PUT(req) {
  return NextResponse.json({ data: 'PUT' });
}

export async function DELETE() {
  const cookieStore = cookies();
  const value = cookieStore.get('heliosAuth')?.value;
  if (!value) return new Response(BAD_REQUEST);

  await redis.del(`heliosUser:${value}`);

  return new Response(SUCCESS, {
    headers: {
      'Set-Cookie': 'heliosAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict; Path=/; Max-Age=0;',
    },
  });
}
