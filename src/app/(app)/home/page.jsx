'use client';
import { useEffect, useState } from 'react';
import EntryListItem from './EntryListItem';
import EntryMonthWrapper from './EntryMonthWrapper';
import SearchFilterContainer from './SearchFilterContainer';
import styles from './home.module.scss';
import { getEntries } from '@/app/actions/entries.js';

export default function Home() {
  const [entryList, setEntryList] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 3;

  useEffect(() => {
  // TODO: get actual user id
    const userId = 1;

    getEntries(userId, limit, offset)
      .then(entries => {
        // if check is for avoiding concat on initial render,
        // which led to a duplicate entries bug
        if (offset === 0) {
          setEntryList(entries)
        } else {
          setEntryList((prev) => prev.concat(entries))
        }
      })
      .catch(err => console.error(err)); 
  }, [offset])
 
  function fetchMoreEntries() {
    // updating the offset triggers the useEffect
    setOffset(prev => prev+limit)
  }

  // use a set to obtain a list of the months that have an entry,
  // for use when mapping to EntryMonthWrapper
  const monthSet = new Set();
  entryList.forEach((entry) => monthSet.add(entry.created_at.toLocaleString('default', { month: 'long' })));
  const entryMonths = [...monthSet];

  return (
    <div className={styles.homeContainer}>
      <SearchFilterContainer />
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
      </div>
      <button onClick={fetchMoreEntries}>load more</button>
    </div>
  );
}
