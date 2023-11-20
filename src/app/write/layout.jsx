import Link from 'next/link';
import styles from './layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.writeWrapper}>
      <div className={styles.header}>
        <Link href={'/home'}>:R</Link>
      </div>

      {children}
    </div>
  );
}
