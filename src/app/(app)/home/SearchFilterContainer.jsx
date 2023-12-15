import styles from './home.module.scss';
import { IoSearch } from 'react-icons/io5';

export default function SearchFilterContainer() {
  return (
    <div className={styles.searchFilterContainer}>
      <div className={styles.searchContainer}>
        <IoSearch />
        <input type='text' className={styles.searchbar} />
      </div>
      <button className={styles.jumpToDateBtn}>Jump to date</button>
    </div>
  );
}
