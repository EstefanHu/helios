'use client';
import styles from './home.module.scss';

export default function EntryListItem() {
  return (
    <div className={styles.entryListItem}>
      <p className={styles.entryListItemTime}>7:52 PM</p>
      <h2 className={styles.entryListItemTitle}>Title</h2>
      <p className={styles.entryListItemBody}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat eius maiores at alias reprehenderit quo
        quibusdam! Ipsa illo assumenda modi maxime nam architecto et?
      </p>
    </div>
  );
}
