'use client';
import { useState, useEffect, useContext } from 'react';
import { TravelerContext } from '@/app/ContextProvider.jsx';
import getHomeContent from '@/app/actions/getHomeContent.js';
import styles from './Home.module.scss';

export default function HomeContent() {
  const { traveler } = useContext(TravelerContext);
  const [recentFeed, setRecentFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!traveler) return;
    getHomeContent(traveler.travelerId).then((res) => {
      console.log(res);
      setRecentFeed([]);
      setIsLoading(false);
    });
  }, [traveler]);

  if (isLoading) return <h1>loading</h1>;

  return (
    <div className={styles.homeContent}>
      <section className={styles.suggestion}>
        <p>wow</p>
      </section>
    </div>
  );
}
