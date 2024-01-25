import Link from 'next/link';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();
import RecoverAccountForm from './RecoverAccountForm';
import styles from '../authLayout.module.scss';

export const metadata = { title: 'Helios | Recover Account' };

export default function RecoverAccount() {
  const triggerAccountRecovery = async () => {
    'use server';
    console.log('account recover');
    const client = await pool.connect();

    try {
      const query = `SELECT id, emailAddress
                    FROM seeker
                    WHERE emailAddress = '${emailAddress}'`;
      const { rows } = await client.query(query);

      console.log({ seeker: rows[0] });

      return { code: 200 };
    } catch (error) {
      console.log(error);

      return { code: 500 };
    } finally {
      client.release();
    }
  };

  return (
    <div className={styles.authPage}>
      <h1>
        Recover <span>account</span>
      </h1>

      <RecoverAccountForm handleAccountRecovery={triggerAccountRecovery} />
    </div>
  );
}
