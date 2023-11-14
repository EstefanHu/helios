import Link from 'next/link';
import LoginForm from './LoginForm';
import styles from '../authLayout.module.scss';

export default function Continue() {
  return (
    <div className={styles.authPage}>
      <h1>
        Continue <span>story</span>
      </h1>

      <LoginForm />

      <p>
        don&apos;t have an account? <Link href='/start'>Sign up</Link>
      </p>

      <p>
        <Link href='/recover_account'>forgot password?</Link>
      </p>
    </div>
  );
}
