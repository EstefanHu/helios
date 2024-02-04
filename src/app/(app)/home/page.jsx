import EntryListItem from './EntryListItem';
import EntryMonthWrapper from './EntryMonthWrapper';
import styles from './home.module.scss';

const mockEntries = [
  {
    id: 0,
    title: 'Title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos nobis voluptatum quibusdam aspernatur animi dignissimos fugit reprehenderit, delectus perferendis cupiditate laudantium laboriosam ullam dolore quo, deleniti saepe omnis. Id sed nam, omnis similique deleniti quo esse architecto, nulla cum ex quidem. Quam esse doloribus tempora perferendis, minima possimus, aliquam voluptates odio ab, rem provident unde amet magnam fugiat facilis pariatur deleniti non consectetur vel libero nostrum blanditiis totam debitis accusantium. Dicta corrupti labore consequatur, vel velit voluptate est eum sint optio. Autem porro corporis ea consectetur numquam neque minima ducimus praesentium qui velit iste vitae voluptate, eum quae necessitatibus?',
    creationDateTime: new Date('October 31, 2023 18:30:00'),
    updatedDateTime: new Date('December 8, 2023 18:30:00'),
    tags: ['peaceful', 'evening', 'reflection'],
  },
  {
    id: 1,
    title: 'Title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos nobis voluptatum quibusdam aspernatur animi dignissimos fugit reprehenderit, delectus perferendis cupiditate laudantium laboriosam ullam dolore quo, deleniti saepe omnis. Id sed nam, omnis similique deleniti quo esse architecto, nulla cum ex quidem. Quam esse doloribus tempora perferendis, minima possimus, aliquam voluptates odio ab, rem provident unde amet magnam fugiat facilis pariatur deleniti non consectetur vel libero nostrum blanditiis totam debitis accusantium. Dicta corrupti labore consequatur, vel velit voluptate est eum sint optio. Autem porro corporis ea consectetur numquam neque minima ducimus praesentium qui velit iste vitae voluptate, eum quae necessitatibus?',
    creationDateTime: new Date('December 8, 2023 18:30:00'),
    updatedDateTime: new Date('December 8, 2023 18:30:00'),
    tags: ['peaceful', 'evening', 'reflection'],
  },
  {
    id: 2,
    title: 'Title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos nobis voluptatum quibusdam aspernatur animi dignissimos fugit reprehenderit, delectus perferendis cupiditate laudantium laboriosam ullam dolore quo, deleniti saepe omnis. Id sed nam, omnis similique deleniti quo esse architecto, nulla cum ex quidem. Quam esse doloribus tempora perferendis, minima possimus, aliquam voluptates odio ab, rem provident unde amet magnam fugiat facilis pariatur deleniti non consectetur vel libero nostrum blanditiis totam debitis accusantium. Dicta corrupti labore consequatur, vel velit voluptate est eum sint optio. Autem porro corporis ea consectetur numquam neque minima ducimus praesentium qui velit iste vitae voluptate, eum quae necessitatibus?',
    creationDateTime: new Date('December 7, 2023 21:15:00'),
    updatedDateTime: new Date('December 7, 2023 21:15:00'),
    tags: ['city lights', 'adventure', 'friends'],
  },
  {
    id: 3,
    title: 'Title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos nobis voluptatum quibusdam aspernatur animi dignissimos fugit reprehenderit, delectus perferendis cupiditate laudantium laboriosam ullam dolore quo, deleniti saepe omnis. Id sed nam, omnis similique deleniti quo esse architecto, nulla cum ex quidem. Quam esse doloribus tempora perferendis, minima possimus, aliquam voluptates odio ab, rem provident unde amet magnam fugiat facilis pariatur deleniti non consectetur vel libero nostrum blanditiis totam debitis accusantium. Dicta corrupti labore consequatur, vel velit voluptate est eum sint optio. Autem porro corporis ea consectetur numquam neque minima ducimus praesentium qui velit iste vitae voluptate, eum quae necessitatibus?',
    creationDateTime: new Date('December 5, 2023 19:00:00'),
    updatedDateTime: new Date('December 5, 2023 19:00:00'),
    tags: ['thanksgiving', 'family', 'gratitude'],
  },
  {
    id: 4,
    title: 'Title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos nobis voluptatum quibusdam aspernatur animi dignissimos fugit reprehenderit, delectus perferendis cupiditate laudantium laboriosam ullam dolore quo, deleniti saepe omnis. Id sed nam, omnis similique deleniti quo esse architecto, nulla cum ex quidem. Quam esse doloribus tempora perferendis, minima possimus, aliquam voluptates odio ab, rem provident unde amet magnam fugiat facilis pariatur deleniti non consectetur vel libero nostrum blanditiis totam debitis accusantium. Dicta corrupti labore consequatur, vel velit voluptate est eum sint optio. Autem porro corporis ea consectetur numquam neque minima ducimus praesentium qui velit iste vitae voluptate, eum quae necessitatibus?',
    creationDateTime: new Date('November 18, 2023 14:45:00'),
    updatedDateTime: new Date('November 18, 2023 14:45:00'),
    tags: ['rainy day', 'introspection', 'coziness'],
  },
  {
    id: 5,
    title: 'Title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos nobis voluptatum quibusdam aspernatur animi dignissimos fugit reprehenderit, delectus perferendis cupiditate laudantium laboriosam ullam dolore quo, deleniti saepe omnis. Id sed nam, omnis similique deleniti quo esse architecto, nulla cum ex quidem. Quam esse doloribus tempora perferendis, minima possimus, aliquam voluptates odio ab, rem provident unde amet magnam fugiat facilis pariatur deleniti non consectetur vel libero nostrum blanditiis totam debitis accusantium. Dicta corrupti labore consequatur, vel velit voluptate est eum sint optio. Autem porro corporis ea consectetur numquam neque minima ducimus praesentium qui velit iste vitae voluptate, eum quae necessitatibus?',
    creationDateTime: new Date('November 5, 2023 11:00:00'),
    updatedDateTime: new Date('November 5, 2023 11:00:00'),
    tags: ['autumn', 'nature', 'inspiration'],
  },
  {
    id: 6,
    title: 'Title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos nobis voluptatum quibusdam aspernatur animi dignissimos fugit reprehenderit, delectus perferendis cupiditate laudantium laboriosam ullam dolore quo, deleniti saepe omnis. Id sed nam, omnis similique deleniti quo esse architecto, nulla cum ex quidem. Quam esse doloribus tempora perferendis, minima possimus, aliquam voluptates odio ab, rem provident unde amet magnam fugiat facilis pariatur deleniti non consectetur vel libero nostrum blanditiis totam debitis accusantium. Dicta corrupti labore consequatur, vel velit voluptate est eum sint optio. Autem porro corporis ea consectetur numquam neque minima ducimus praesentium qui velit iste vitae voluptate, eum quae necessitatibus?',
    creationDateTime: new Date('October 24, 2023 11:00:00'),
    updatedDateTime: new Date('November 5, 2023 11:00:00'),
    tags: ['autumn', 'nature', 'inspiration'],
  },
  {
    id: 7,
    title: 'Title',
    body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique eos nobis voluptatum quibusdam aspernatur animi dignissimos fugit reprehenderit, delectus perferendis cupiditate laudantium laboriosam ullam dolore quo, deleniti saepe omnis. Id sed nam, omnis similique deleniti quo esse architecto, nulla cum ex quidem. Quam esse doloribus tempora perferendis, minima possimus, aliquam voluptates odio ab, rem provident unde amet magnam fugiat facilis pariatur deleniti non consectetur vel libero nostrum blanditiis totam debitis accusantium. Dicta corrupti labore consequatur, vel velit voluptate est eum sint optio. Autem porro corporis ea consectetur numquam neque minima ducimus praesentium qui velit iste vitae voluptate, eum quae necessitatibus?',
    creationDateTime: new Date('November 12, 2023 11:00:00'),
    updatedDateTime: new Date('November 5, 2023 11:00:00'),
    tags: ['autumn', 'nature', 'inspiration'],
  },
];

export default function Home() {
  let reverseChronoEntries = mockEntries.sort((a, b) => b.creationDateTime - a.creationDateTime);

  // use a set to obtain a list of the months that have an entry,
  // for use when mapping to EntryMonthWrapper
  const monthSet = new Set();
  reverseChronoEntries.forEach((entry) =>
    monthSet.add(entry.creationDateTime.toLocaleString('default', { month: 'long' }))
  );
  const entryMonths = [...monthSet];

  return (
    <div className={styles.homeContainer}>
      <div className={styles.entryListContainer}>
        {entryMonths.map((month) => {
          const filteredEntriesByMonth = reverseChronoEntries.filter(
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
