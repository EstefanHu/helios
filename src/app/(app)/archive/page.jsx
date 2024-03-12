'use client';
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import EntryListItem from './EntryListItem';
import EntryMonthWrapper from './EntryMonthWrapper';
import styles from './Archive.module.scss';
import { getEntries, getEntryCount } from '@/app/actions/entries.js';
import { TravelerContext } from '../ContextProvider';
import { RotatingLines } from 'react-loader-spinner';

export default function Home() {
  const [entryList, setEntryList] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const { traveler } = useContext(TravelerContext);

  // offset tracks how many rows to skip over when fetching
  const [offset, setOffset] = useState(0);
  // limit is the # of entries to fetch at a time
  const limit = 5;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEntryCount()
      .then((res) => setTotalEntries(res.count))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    getEntries(traveler.travelerId, limit, offset)
      .then((res) => {
        // if check is for avoiding concat on initial render,
        // which led to a duplicate entries bug
        const { entries } = res;
        if (offset === 0) {
          setEntryList(entries);
        } else {
          setEntryList((prev) => prev.concat(entries));
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [traveler, offset]);

  function fetchMoreEntries() {
    // updating the offset triggers the useEffect
    setOffset((prev) => prev + limit);
  }

  // use a set to obtain a list of the months that have an entry,
  // for use when mapping to EntryMonthWrapper
  const monthSet = new Set();
  entryList.forEach((entry) => monthSet.add(entry.created_at.toLocaleString('default', { month: 'long' })));
  const entryMonths = [...monthSet];

  return (
    <div className={styles.archiveContainer}>
      <section>
        {entryMonths.map((month) => {
          const filteredEntriesByMonth = entryList.filter(
            (entry) => entry.created_at.toLocaleString('default', { month: 'long' }) === month
          );

          return (
            <EntryMonthWrapper key={month} month={month}>
              {filteredEntriesByMonth.map((entry) => (
                <EntryListItem key={entry.id} entry={entry} />
              ))}
            </EntryMonthWrapper>
          );
        })}
        {loading && (
          <div className={styles.centerContainer}>
            <RotatingLines strokeColor='#f3b04e' height='48' width='48' />
          </div>
        )}
        {!loading && (
          <div className={styles.centerContainer}>
            {!entryList.length ? (
              <p>
                No entries yet. <Link href='/write'>Write your first!</Link>
              </p>
            ) : entryList.length < totalEntries ? (
              <button onClick={fetchMoreEntries}>Show more</button>
            ) : (
              <p className='italicLight'>You&apos;ve reached the end.</p>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
