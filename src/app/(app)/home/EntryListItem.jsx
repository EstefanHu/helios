'use client';
import styles from './home.module.scss';

export default function EntryListItem() {
  return (
    <div className={styles.entryDayWrapper}>
      <div className={styles.dateBox}>
        <p className={styles.dateBoxNumber}>07</p>
        <p className={styles.dateBoxWeekday}>Thu</p>
      </div>
      <div className={styles.entryDayList}>
        <div className={styles.entryListItem}>
          <p className={styles.entryListItemTime}>7:52 PM</p>
          <h2 className={styles.entryListItemTitle}>Title</h2>
          <p className={styles.entryListItemBody}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat eius maiores at alias reprehenderit
            quo quibusdam! Ipsa illo assumenda modi maxime nam architecto et?
          </p>
        </div>
      </div>
    </div>
  );
}
