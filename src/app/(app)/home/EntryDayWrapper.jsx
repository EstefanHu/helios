'use client';
import styles from './home.module.scss';

export default function EntryDayWrapper({ children }) {
  return (
    <div className='entry-day-wrapper'>
      <div className={styles.dateBox}>
        <p className={styles.dateBoxNumber}>07</p>
        <p className={styles.dateBoxWeekday}>Thu</p>
      </div>
      {children}
    </div>
  );
}
