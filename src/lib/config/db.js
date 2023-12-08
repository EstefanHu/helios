import { Pool } from 'pg';

let db;

if (!db) {
  db = new Pool({ connectionString: process.env.POSTGRES_URL });
}

db.on('error', (err, db) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default db;
