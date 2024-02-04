'use client';
import styles from './Reflect.module.scss';

const history = [
  { date: 'today', words: 239 },
  { date: 'today', words: 239 },
  { date: 'today', words: 239 },
  { date: 'today', words: 239 },
  { date: 'today', words: 239 },
  { date: 'today', words: 239 },
  { date: 'today', words: 239 },
  { date: 'today', words: 239 },
  { date: 'today', words: 239 },
];

export default function ActivityVisualizer({ fetchDay }) {
  return (
    <>
      {history.map((day) => {
        return <button key={day.date} className={styles.day} title={day.date} onClick={() => fetchDay()} />;
      })}
    </>
  );
}
