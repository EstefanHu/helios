import EntryListItem from './EntryListItem';
import EntryMonthWrapper from './EntryMonthWrapper';
import styles from './home.module.scss';

const mockEntries = [
  {
    id: 1,
    title: 'Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum vestibulum nisi, eu tincidunt ligula hendrerit sit amet. Nullam a turpis vel est aliquam consectetur.',
    creationDateTime: new Date('December 7, 2023 18:30:00'),
    updatedDateTime: new Date('December 7, 2023 18:30:00'),
    tags: ['peaceful', 'evening', 'reflection'],
  },
  {
    id: 2,
    title: 'Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel mauris id purus sagittis dapibus a ac urna. Vivamus scelerisque, dolor a sodales eleifend, nunc justo commodo elit.',
    creationDateTime: new Date('December 7, 2023 21:15:00'),
    updatedDateTime: new Date('December 7, 2023 21:15:00'),
    tags: ['city lights', 'adventure', 'friends'],
  },
  {
    id: 3,
    title: 'Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, metus ac pharetra congue, ligula augue vestibulum sapien, in pulvinar justo eros sit amet erat.',
    creationDateTime: new Date('December 5, 2023 19:00:00'),
    updatedDateTime: new Date('December 5, 2023 19:00:00'),
    tags: ['thanksgiving', 'family', 'gratitude'],
  },
  {
    id: 4,
    title: 'Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies, leo in ullamcorper posuere, ligula libero sagittis velit, vitae efficitur libero augue sit amet lectus.',
    creationDateTime: new Date('November 18, 2023 14:45:00'),
    updatedDateTime: new Date('November 18, 2023 14:45:00'),
    tags: ['rainy day', 'introspection', 'coziness'],
  },
  {
    id: 5,
    title: 'Title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod sem eu lacus posuere, eu pellentesque mi tincidunt. Nulla facilisi. Duis volutpat ex vel accumsan convallis.',
    creationDateTime: new Date('November 5, 2023 11:00:00'),
    updatedDateTime: new Date('November 5, 2023 11:00:00'),
    tags: ['autumn', 'nature', 'inspiration'],
  },
];

export default function Home() {
  const monthSet = new Set();
  mockEntries.forEach((entry) => monthSet.add(entry.creationDateTime.toLocaleString('default', { month: 'long' })));
  const entryMonths = [...monthSet];

  return (
    <div>
      <div className={styles.entryListContainer}>
        {entryMonths.map((month) => {
          const filteredEntriesByMonth = mockEntries.filter(
            (entry) => entry.creationDateTime.toLocaleString('default', { month: 'long' }) === month
          );
          return (
            <EntryMonthWrapper key={month} month={month}>
              {filteredEntriesByMonth.map((entry) => (
                <EntryListItem key={entry.id} entry={entry} />
              ))}
            </EntryMonthWrapper>
          );
        })}
      </div>
    </div>
  );
}
