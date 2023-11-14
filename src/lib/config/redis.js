import Redis from 'ioredis';

const redis = new Redis(process.env.SESSIONS_URL || 'redis://localhost:6379');

export default redis;
