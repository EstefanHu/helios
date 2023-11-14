import Link from 'next/link';
import StartForm from './StartForm';
import styles from '../authLayout.module.scss';

export default function page() {
  return (
    <div className={styles.authPage}>
      <h1>
        Join <span>:Helios</span>
      </h1>

      <StartForm />

      <p>
        Already have an account? <Link href='/continue'>Sign in</Link>
      </p>
    </div>
  );
}
