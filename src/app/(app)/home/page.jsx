import EntryDayWrapper from './EntryDayWrapper';
import EntryListItem from './EntryListItem';
import styles from './home.module.scss';

export default function Home() {
  return (
    <div>
      <div className={styles.entryListContainer}>
        <EntryDayWrapper>
          <EntryListItem />
          <EntryListItem />
        </EntryDayWrapper>
        <EntryDayWrapper>
          <EntryListItem />
        </EntryDayWrapper>
      </div>
    </div>
  );
}
