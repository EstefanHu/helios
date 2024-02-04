import ActivityVisualizer from './ActivityVisualizer';
import styles from './Reflect.module.scss';

export default function Reflect() {
  const fetchDay = async (day) => {
    'use server';

    console.log('Fetching day:', day);
  };

  return (
    <div className={styles.reflectWrapper}>
      <h1>Reflect</h1>

      <section>
        <h2>words written this year</h2>
        <div className={styles.activityWrapper}>
          <ActivityVisualizer fetchDay={fetchDay} />
        </div>
      </section>

      <section></section>
    </div>
  );
}
