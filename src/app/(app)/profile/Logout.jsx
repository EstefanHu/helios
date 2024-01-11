'use client';
import { useRouter } from 'next/navigation';
import styles from './Profile.module.scss';

export default function Logout() {
  const router = useRouter();

  const runLogout = async () => {
    console.log('Running logout');
    await fetch('/auth', { method: 'DELETE' });
    router.push('/');
  };

  return (
    <button className={styles.logout} type='button' onClick={runLogout}>
      Logout
    </button>
  );
}
