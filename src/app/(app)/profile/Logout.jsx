'use client';
import { useRouter } from 'next/navigation';

export default function Logout() {
  const router = useRouter();

  const runLogout = async () => {
    console.log('Running logout');
    await fetch('/auth', { method: 'DELETE' });
    router.push('/');
  };

  return (
    <button type='button' onClick={runLogout}>
      Logout
    </button>
  );
}
