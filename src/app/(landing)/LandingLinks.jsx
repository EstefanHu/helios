'use client';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { SeekerContext } from '@/lib/helpers/ContextProvider.jsx';
import styles from './marketingLayout.module.scss';

export default function LandingLinks({ getCurrentSession }) {
  const { seeker, setSeeker } = useContext(SeekerContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (seeker) return setIsLoading(false);
    getCurrentSession().then((data) => {
      setIsLoading(false);
      setSeeker(data.seeker);
    });
  }, [seeker, setSeeker, getCurrentSession]);

  return (
    <>
      {!isLoading && !seeker && (
        <Link href='/start' className={styles.start}>
          start journey
        </Link>
      )}

      <Link href={seeker ? '/home' : '/continue'} className={styles.continue}>
        continue
      </Link>
    </>
  );
}
