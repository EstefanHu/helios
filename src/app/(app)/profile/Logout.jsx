'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { SeekerContext } from '@/lib/helpers/ContextProvider.jsx';
import styles from './Profile.module.scss';

export default function Logout() {
  const { setSeeker } = useContext(SeekerContext);
  const router = useRouter();

  const runLogout = async () => {
    setSeeker(null);
    await fetch('/auth', { method: 'DELETE' });
    router.push('/');
  };

  return (
    <button className={styles.logout} type='button' onClick={runLogout}>
      Logout
    </button>
  );
}
