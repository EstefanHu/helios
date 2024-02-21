import { cookies } from 'next/headers';
import redis from '@/lib/config/redis.js';
import WriteInput from '../WriteInput';
import styles from './entry.module.scss';

export const metadata = {
  title: 'Write | Helios',
  description: 'Writing new entry',
};

export default async function Page({ params }) {
  const heliosAuth = cookies().get('heliosAuth')?.value;
  // if (!heliosAuth) return <Deauth />;
  const userId = await redis.hget(`heliosTraveler:${heliosAuth}`, 'userId');
  // if (!userId) return <Deauth />;
  // check if user exists
  const entry = { id: '1', body: '' };

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.title}>{entry.title}</h1>

      <WriteInput id={entry.id} body={entry.body} />
    </div>
  );
}
