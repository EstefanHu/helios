'use client';
import { useEffect, useState } from 'react';
import EntryListItem from './EntryListItem';
import EntryMonthWrapper from './EntryMonthWrapper';
import styles from './home.module.scss';
import { getEntries, getEntryCount } from '@/app/actions/entries.js';

export default function Home() {
  const [entryList, setEntryList] = useState([]);
  const [totalEntries, setTotalEntries] = useState(0);

  // offset tracks how many rows to skip over when fetching
  const [offset, setOffset] = useState(0);
  // limit is the # of entries to fetch at a time
  const limit = 10;

  useEffect(() => {
    getEntryCount()
      .then((res) => setTotalEntries(res.count))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    // TODO: get actual user id
    const userId = 1;
    getEntries(userId, limit, offset)
      .then((entries) => {
        // if check is for avoiding concat on initial render,
        // which led to a duplicate entries bug
        if (offset === 0) {
          setEntryList(entries);
        } else {
          setEntryList((prev) => prev.concat(entries));
        }
      })
      .catch((err) => console.error(err));
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
    <div className={styles.homeContainer}>
      <div className={styles.entryListContainer}>
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
        <div className={styles.centerContainer}>
          {entryList.length < totalEntries && <button onClick={fetchMoreEntries}>Show more</button>}
        </div>
      </div>
    </div>
  );
}
