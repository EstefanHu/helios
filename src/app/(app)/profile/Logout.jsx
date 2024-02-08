'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { TravelerContext } from '@/app/(app)/ContextProvider.jsx';
import styles from './Profile.module.scss';

export default function Logout() {
  const { setTraveler } = useContext(TravelerContext);
  const router = useRouter();

  const runLogout = async () => {
    setTraveler(null);
    await fetch('/auth', { method: 'DELETE' });
    router.push('/');
  };

  return (
    <button className={styles.logout} type='button' onClick={runLogout}>
      Logout
    </button>
  );
}
