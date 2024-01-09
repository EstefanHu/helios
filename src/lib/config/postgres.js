import { Pool } from 'pg';

if (!global.db) {
  global.db = { pool: null };
}

export function connectToDatabase() {
  if (!global.db.pool) {
    console.log('No pool available, creating new pool.');
    const connectionString =
      process.env.NODE_ENV === 'production' || process.env.USE_POSTGRES === 'true'
        ? process.env.POSTGRES_URL + '?sslmode=require'
        : process.env.DB_URL;
    global.db.pool = new Pool({ connectionString });
  }

  return global.db;
}
