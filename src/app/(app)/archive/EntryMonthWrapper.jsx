'use client';
import styles from './Archive.module.scss';

export default function EntryMonthWrapper({ children, month }) {
  return (
    <div className={styles.entryMonthWrapper}>
      <h2>{month}</h2>
      <div className={styles.list}>{children}</div>
    </div>
  );
}
