'use client';
import styles from './home.module.scss';

export default function EntryMonthWrapper({ children }) {
  return (
    <div className={styles.entryMonthWrapper}>
      <h2 className={styles.entryMonthHeader}>December</h2>
      <div className={styles.entryDayList}>{children}</div>
    </div>
  );
}
