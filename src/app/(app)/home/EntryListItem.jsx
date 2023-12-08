'use client';
import styles from './home.module.scss';

export default function EntryListItem({ entry }) {
  return (
    <div className={styles.entryDayWrapper}>
      <div className={styles.dateBox}>
        <p className={styles.dateBoxNumber}>{entry.creationDateTime.toLocaleString('default', { day: 'numeric' })}</p>
        <p className={styles.dateBoxWeekday}>
          {entry.creationDateTime.toLocaleString('default', { weekday: 'short' })}
        </p>
      </div>
      <div className={styles.entryDayList}>
        <div className={styles.entryListItem}>
          <p className={styles.entryListItemTime}>{entry.creationDateTime.toLocaleTimeString('en-US')}</p>
          <h2 className={styles.entryListItemTitle}>{entry.title}</h2>
          <p className={styles.entryListItemBody}>{entry.body}</p>
        </div>
      </div>
    </div>
  );
}
