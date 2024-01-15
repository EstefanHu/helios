import EntryListItem from './EntryListItem';
import EntryMonthWrapper from './EntryMonthWrapper';
import SearchFilterContainer from './SearchFilterContainer';
import styles from './home.module.scss';
import { connectToDatabase } from '@/lib/config/postgres.js';
const { pool } = connectToDatabase();

export default async function Home() {
  const fetchEntries = async () => {
    'use server';
    const client = await pool.connect();
    try {
      const res = await client.query('SELECT * FROM entry WHERE seeker_id = 1')  
      return res.rows
    } catch (error) {
      return error.stack
    }  finally {
      client.release();
    }
  }

  const mockEntries = await fetchEntries()
  let reverseChronoEntries = mockEntries.sort((a, b) => b.created_at - a.created_at);

  // use a set to obtain a list of the months that have an entry,
  // for use when mapping to EntryMonthWrapper
  const monthSet = new Set();
  reverseChronoEntries.forEach((entry) =>
    monthSet.add(entry.created_at.toLocaleString('default', { month: 'long' }))
  );
  const entryMonths = [...monthSet];

  return (
    <div className={styles.homeContainer}>
      <SearchFilterContainer />
      <div className={styles.entryListContainer}>
        {entryMonths.map((month) => {
          const filteredEntriesByMonth = reverseChronoEntries.filter(
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
    </div>
  );
}
