'use client';
import { useState } from 'react';
import styles from '../authLayout.module.scss';

export default function RecoverAccountForm({ triggerAccountRecovery }) {
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = () => setHasSubmitted(true);

  const handleSubmitt = async (e) => {
    e.preventDefault();
    if (isLoading) return;
    if (!input) return setError('Must enter email, phone number, or username');

    setIsLoading(true);
    await triggerAccountRecovery(input);
    setIsLoading(false);

    if (code !== 200) return setError('Something went wrong on our end. Please try again later.');

    setHasSubmitted(true);
  };

  return hasSubmitted ? (
    <SubmissionAcknowledged />
  ) : (
    <form noValidate autoComplete='off' onSubmit={handleSubmit} className={styles.form}>
      <fieldset>
        <input
          type='text'
          placeholder='Enter email, phone number, or username'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className={styles.error}>{error}</p>
      </fieldset>

      <input type='submit' className={styles.hidden} />

      <button onClick={handleSubmit} type='submit'>
        Submit Recovery
      </button>
    </form>
  );
}

const SubmissionAcknowledged = () => (
  <div className='acknowledged'>
    <h1>your request has been recieved.</h1>
    <p>check your email for instructions on next steps.</p>
  </div>
);
