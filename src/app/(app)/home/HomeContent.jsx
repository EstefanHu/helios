'use client';
import { useState, useEffect, useContext } from 'react';
import { TravelerContext } from '../ContextProvider';
import styles from './Home.module.scss';

export default function HomeContent({ fetchHomeContent }) {
  const { traveler } = useContext(TravelerContext);
  const [recentFeed, setRecentFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!traveler) return;
    fetchHomeContent(traveler.travelerId).then((res) => {
      console.log(res);
      setRecentFeed([]);
      setIsLoading(false);
    });
  }, [fetchHomeContent, traveler]);

  if (isLoading) return <h1>loading</h1>;

  return (
    <div className={styles.homeContent}>
      <section className={styles.suggestion}>
        <p>wow</p>
      </section>
    </div>
  );
}
