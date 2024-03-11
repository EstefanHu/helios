'use client';
import Link from 'next/link';
import styles from './Archive.module.scss';

export default function EntryListItem({ entry }) {
  return (
    <div className={styles.entryDayWrapper}>
      <div className={styles.dateBox}>
        <span>{entry.created_at.toLocaleString('default', { day: 'numeric' })}</span>
        <span>{entry.created_at.toLocaleString('default', { weekday: 'short' })}</span>
      </div>
      <Link href={`archive/${entry.slug}`}>
        <div className={styles.preview}>
          <span>
            {Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric', hour12: true }).format(entry.created_at)}
          </span>
          <h3>{entry.title}</h3>
          <p>{entry.body}</p>
        </div>
      </Link>
    </div>
    
  );
}
