'use client';
import { useEffect, useState, useContext } from 'react';
import EntryListItem from './EntryListItem';
import EntryMonthWrapper from './EntryMonthWrapper';
import styles from './Archive.module.scss';
import { getEntries, getEntryCount } from '@/app/actions/entries.js';
import { TravelerContext } from '../ContextProvider';
import { ring2 } from 'ldrs'

export default function Home() {
  const [entryList, setEntryList] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);
  const { traveler } = useContext(TravelerContext);

  // offset tracks how many rows to skip over when fetching
  const [offset, setOffset] = useState(0);
  // limit is the # of entries to fetch at a time
  const limit = 5;

  const [loading, setLoading] = useState(true);
  ring2.register();
  
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
      .finally(()=>setLoading(false));
  }, [offset]);

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
        {loading && 
        <div className={styles.centerContainer}>
          <l-ring-2
          size="60"
          stroke="5"
          stroke-length="0.25"
          bg-opacity="0.1"
          speed="0.8" 
          color="orange" 
        ></l-ring-2>
        </div>}
        <div className={styles.centerContainer}>
          {!loading && entryList.length < totalEntries && <button onClick={fetchMoreEntries}>Show more</button>}
        </div>
      </section>
    </div>
  );
}
