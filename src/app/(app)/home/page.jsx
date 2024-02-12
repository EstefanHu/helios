import styles from './Home.module.scss';

export const metadata = {
  title: 'Home | Helios',
  description: 'Helios home',
};

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <h1>Home</h1>
    </div>
  );
}
