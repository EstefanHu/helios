'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../authLayout.module.scss';
import { ValidateEmailAddress } from '@/lib/helpers/validateEmailAddress.js';

const DEFAULT_DATA = {
  emailAddress: '',
  password: '',
};

export default function RegisterForm({ createHero }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailAddress: 'g.host@email.com',
    password: 'password',
  });
  const [errorData, setErrorData] = useState(DEFAULT_DATA);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    setErrorData(DEFAULT_DATA);
    const { emailAddress, password } = formData;
    const errors = {
      emailAddress: '',
      password: '',
    };

    if (!emailAddress) errors.emailAddress = 'email is requried';
    if (emailAddress && !ValidateEmailAddress(emailAddress)) errors.emailAddress = 'invalid email';
    // if (!password) errors.password = 'password is required';
    // if (errors.password !== '' || errors.emailAddress !== '') return setErrorData(errors);

    setIsLoading(true);
    const { code, message } = await createHero(emailAddress, password);
    setIsLoading(false);

    if (code !== 201) return setErrorData({ emailAddress: message, password: message });

    // router.push('/welcome');
  };

  return (
    <form noValidate autoComplete='off' onSubmit={handleRegister} className={styles.form}>
      <fieldset>
        <input
          type='email'
          placeholder='email address'
          value={formData.emailAddress}
          onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
        />
        <p className={styles.error}>{errorData.emailAddress}</p>

        <input
          type='password'
          placeholder='password'
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <p className={styles.error}>{errorData.password}</p>
      </fieldset>

      <input type='submit' className={styles.hidden} />

      <p className={styles.text}>
        By signing up, you agree to our <Link href='/tos'>terms of service</Link>
      </p>

      <button onClick={handleRegister} type='submit'>
        Sign up
      </button>
    </form>
  );
}
