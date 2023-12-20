import Link from 'next/link';
import StartForm from './StartForm';
import styles from '../authLayout.module.scss';
import { ValidateEmailAddress } from '@/lib/helpers/validateEmailAddress.js';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export default function page() {
  const createSeeker = async (emailAddress, password) => {
    'use server';
    if (!emailAddress || !password || !ValidateEmailAddress(emailAddress)) return { code: 400, message: 'bad request' };
    const client = await pool.connect();

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await client.query('INSERT INTO seeker(emailAddress, password) VALUES ($1, $2) RETURNING id;', [
        emailAddress,
        hashedPassword,
      ]);

      return { code: 201, message: 'seeker created' };
    } catch (error) {
      const { code, column } = error;
      switch (code) {
        case '23502':
          return { code: 400, message: `Missing field: ${column}` };
        case '23505':
          return { code: 409, message: 'email address already in use' };
        default:
          return { code: 500, message: 'seeker creation failed' };
      }
    } finally {
      client.release();
    }
  };

  return (
    <div className={styles.authPage}>
      <h1>
        Join <span>:Helios</span>
      </h1>

      <StartForm createSeeker={createSeeker} />

      <p>
        Already have an account? <Link href='/continue'>Sign in</Link>
      </p>
    </div>
  );
}
