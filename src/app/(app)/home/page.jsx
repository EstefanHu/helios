import EntryDayWrapper from './EntryDayWrapper';
import EntryListItem from './EntryListItem';

export default function Home() {
  return (
    <div>
      <div className='entry-list-container'>
        <EntryDayWrapper>
          <EntryListItem />
          <EntryListItem />
        </EntryDayWrapper>
      </div>
    </div>
  );
}
