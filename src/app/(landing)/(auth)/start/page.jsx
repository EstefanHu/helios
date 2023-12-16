import Link from 'next/link';
import StartForm from './StartForm';
import styles from '../authLayout.module.scss';
import { v4 as generateUUID } from 'uuid';
import { ValidateEmailAddress } from '@/lib/helpers/validateEmailAddress.js';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export default function page() {
  const createHero = async (emailAddress, password) => {
    'use server';
    if (!emailAddress || !password || !ValidateEmailAddress(emailAddress)) return { code: 400, message: 'bad request' };
    const client = await pool.connect();

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const response = await client.query('INSERT INTO hero(emailAddress, password) VALUES ($1, $2) RETURNING id;', [
        emailAddress,
        hashedPassword,
      ]);

      console.log(response);

      return { code: 201, message: 'hero created' };
    } catch (error) {
      // TODO: log failure in ledger
      console.log(error.code);
      switch (error.code) {
        case '23505':
          return { code: 409, message: 'email address already in use' };
        default:
          return { code: 500, message: 'hero creation failed' };
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

      <StartForm createHero={createHero} />

      <p>
        Already have an account? <Link href='/continue'>Sign in</Link>
      </p>
    </div>
  );
}
