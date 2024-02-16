import styles from './Home.module.scss';
import HomeContent from './HomeContent';

export const metadata = {
  title: 'Home | Helios',
  description: 'Helios home',
};

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <HomeContent />
    </div>
  );
}
