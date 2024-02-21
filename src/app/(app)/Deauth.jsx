'use client';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { logout } from '../actions/auth';
import { TravelerContext } from './ContextProvider';

export default function Deauth() {
  const router = useRouter();
  const { setTraveler } = useContext(TravelerContext);

  useEffect(() => {
    setTraveler(null);
    logout();
    router.push('/');
  }, [setTraveler, router]);

  return (
    <div>
      <h1>DEAUTHING</h1>
    </div>
  );
}
