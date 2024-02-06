'use client';
import styles from './home.module.scss';
import Link from 'next/link';

export default function EntryListItem({ entry }) {
  return (
    <div className={styles.entryDayWrapper}>
      <div className={styles.dateBox}>
        <p className={styles.dateBoxNumber}>{entry.created_at.toLocaleString('default', { day: 'numeric' })}</p>
        <p className={styles.dateBoxWeekday}>{entry.created_at.toLocaleString('default', { weekday: 'short' })}</p>
      </div>
      <div className={styles.entryListItemContainer}>
        <Link href={`home/${entry.slug}`}>
          <div className={styles.entryListItem}>
            <p className={styles.entryListItemTime}>
              {Intl.DateTimeFormat('en', { hour: 'numeric', minute: 'numeric', hour12: true }).format(entry.created_at)}
            </p>

            <h2 className={styles.entryListItemTitle}>{entry.title}</h2>
            <div className={styles.entryListItemBody}>
              <p>{entry.body}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
