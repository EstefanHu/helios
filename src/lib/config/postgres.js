import { Pool } from 'pg';

if (!global.db) {
  global.db = { pool: null };
}

export function connectToDatabase() {
  if (!global.db.pool) {
    console.log('No pool available, creating new pool.');
    global.db.pool = new Pool({ connectionString: process.env.DB_URL });
  }

  return global.db;
}
