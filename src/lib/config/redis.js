import Redis from 'ioredis';
import { kv } from '@vercel/kv';

const redis =
  process.env.NODE_ENV === 'production' || process.env.USE_KV === 'true'
    ? kv
    : new Redis(process.env.SESSIONS_URL || 'redis://localhost:6379');

export default redis;
