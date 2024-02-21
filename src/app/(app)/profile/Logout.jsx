'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { TravelerContext } from '@/app/(app)/ContextProvider.jsx';
import { logout } from '@/app/actions/auth.js';
import styles from './Profile.module.scss';

export default function Logout() {
  const { setTraveler } = useContext(TravelerContext);
  const router = useRouter();

  const runLogout = async () => {
    setTraveler(null);
    logout();
    router.push('/');
  };

  return (
    <button className={styles.logout} type='button' onClick={runLogout}>
      Logout
    </button>
  );
}
