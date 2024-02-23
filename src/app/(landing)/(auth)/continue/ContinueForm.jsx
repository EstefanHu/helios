'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ValidateEmailAddress } from '@/lib/helpers/validateEmailAddress.js';
import { continueJourney } from '@/app/actions/auth.js';
import styles from '../authLayout.module.scss';

const DEFAULT_DATA = {
  emailAddress: '',
  password: '',
};

export default function ContinueForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(DEFAULT_DATA);
  const [errorData, setErrorData] = useState(DEFAULT_DATA);

  const handleSignIn = async (e) => {
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
    const continueJourneyResponse = await continueJourney(emailAddress, password);
    setIsLoading(false);

    if (continueJourneyResponse.code !== 200) return setErrorData({ emailAddress: message, password: message });

    router.push('/home');
  };

  return (
    <form noValidate autoComplete='off' onSubmit={handleSignIn} className={styles.form}>
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

      <button onClick={handleSignIn} type='submit'>
        Sign in
      </button>
    </form>
  );
}
