import { NextResponse } from 'next/server';
import { v4 as generateUUID } from 'uuid';
import { cookies } from 'next/headers';
import bcrypt from 'bcrypt';
import { BAD_REQUEST, INVALID_REQUEST, SUCCESS } from '@/lib/constants/httpResponses';
import redis from '@/lib/config/redis';

const setUserSession = async (redis, userId) => {
    const token = generateUUID();
    const key = `heliosUser:${token}`;
    const repeatedToken = await redis.exists(key);
    if (repeatedToken === 1) return setUserSession(redis, userId);
    await redis.hset(key, 'userId', userId);
    await redis.expire(key, Number(process.env.SESSION_TTL));

    return token;
};

export async function POST(req) {
    const { emailAddress, password } = await req.json();
    if (!emailAddress || !password) return new Response(BAD_REQUEST);
    const user = { id: 1, password: 'password', emailAddress: 'ehu@gmail.com' };
    if (!user) return new Response(INVALID_REQUEST);
    if (!(await bcrypt.compare(password, user.password))) return new Response(INVALID_REQUEST);

    const sessionToken = await setUserSession(redis, user.id);

    return new Response(SUCCESS, {
        headers: {
            'Set-Cookie': `heliosAuth=${sessionToken}; Max-Age=${process.env.SESSION_TTL
                }; SameSite=Strict; Path=/; HttpOnly ${process.env.NODE_ENV !== 'development' && '; Secure'}`,
        },
    });
}

export async function GET(req) {
    const sessionToken = 'noodles';

    return new Response(SUCCESS, {
        headers: {
            'Set-Cookie': `heliosAuth=${sessionToken}; Max-Age=${process.env.SESSION_TTL
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
        headers: { 'Set-Cookie': 'heliosAuth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; Max-Age=0;' },
    });
}