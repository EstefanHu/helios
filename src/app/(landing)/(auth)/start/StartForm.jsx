'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ValidateEmailAddress } from '@/lib/helpers/validateEmailAddress.js';
import { startJourney } from '@/app/actions/auth.js';
import styles from '../authLayout.module.scss';

const DEFAULT_DATA = {
  emailAddress: '',
  password: '',
};

export default function StartForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [errorData, setErrorData] = useState(DEFAULT_DATA);

  const handleStartRequest = async (e) => {
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
    if (!password) errors.password = 'password is required';
    if (errors.password !== '' || errors.emailAddress !== '') return setErrorData(errors);

    setIsLoading(true);
    try {
      const createTravelerResponse = await startJourney(emailAddress, password);
      if (createTravelerResponse.code !== 201) throw { code: createTravelerResponse.code };
      router.push('/home');
    } catch ({ code }) {
      switch (code) {
        case 400:
          return setErrorData({ global: 'Submitted with missing field' });
        case 409:
          return setErrorData({ emailAddress: 'Email already in use', password: '' });
        default:
          // TODO: log error in error ledger
          return setErrorData({ global: 'Something went wrong on our end, try again later.' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form noValidate autoComplete='off' onSubmit={handleStartRequest} className={styles.form}>
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

      <button onClick={handleStartRequest} type='submit'>
        Sign up
      </button>
    </form>
  );
}
