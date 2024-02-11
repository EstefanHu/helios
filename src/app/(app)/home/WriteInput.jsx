'use client';
import { useState, useCallback, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';
import TextareaAutosize from 'react-textarea-autosize';
import { RotatingLines } from 'react-loader-spinner';
import { GoCheck } from 'react-icons/go';
import { FaRegSave } from 'react-icons/fa';
import styles from './WriteInput.module.scss';

const SaveStates = {
  SAVED: 'Saved',
  SAVING: 'Saving',
  WILL_SAVE: 'WillSave',
};

let timer;

const save = async (id, body, textRef, router, setSaveState) => {
  if (body === textRef) return setSaveState(SaveStates.SAVED);
  setSaveState(SaveStates.SAVING);
  const response = await fetch('/entry/update', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, body }),
  });
  setSaveState(SaveStates.SAVED);
  if (response.status === 307) router.push('/');
};

export default function WriteInput({ id, body = '' }) {
  const router = useRouter();
  const inputRef = useRef(null);

  const [textRef, setTextRef] = useState(body);
  const [currBody, setCurrBody] = useState(body);
  const [bodyCount, setBodyCount] = useState(body.split(' ').filter((n) => n != '').length);
  const [saveState, setSaveState] = useState(SaveStates.SAVED);
  const [shouldScroll, setShouldScroll] = useState(false);

  const scrollToBottom = useCallback((footer) => {
    if (!footer) return;
    footer.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const captureKeydown = (e) => {
      if ((e.metaKey && e.key === 's') || (e.ctrlKey && e.key === 's')) {
        e.preventDefault();
        clearTimeout(timer);
        const body = inputRef.current?.value || '';
        save(id, body, textRef, router, setSaveState);
        setTextRef(body);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        // TODO: Add Tab character
        // TODO: Make Undo (cmd+z) work https://stackoverflow.com/questions/44471699/how-to-make-undo-work-in-an-html-textarea-after-setting-the-value
      }
    };
    document.addEventListener('keydown', captureKeydown);

    // Sets cursor to bottom of input
    inputRef.current?.focus();
    inputRef.current?.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);

    return () => document.removeEventListener('keydown', captureKeydown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textRef]);

  const setAutoSaveTimout = (newBody) => {
    setSaveState(SaveStates.WILL_SAVE);
    setShouldScroll(newBody.split(currBody)[0] === '');
    clearTimeout(timer);
    setCurrBody(newBody);
    setBodyCount(newBody.split(' ').filter((n) => n != '').length);
    timer = setTimeout(async () => {
      save(id, newBody, textRef, router, setSaveState);
      setTextRef(newBody);
    }, 10000);
  };

  const forceSave = () => {
    clearTimeout(timer);
    save(id, currBody, textRef, router, setSaveState);
    setTextRef(currBody);
    inputRef.current?.focus();
  };

  const correctViewport = () => {
    if (!shouldScroll) return;
    window.scrollTo({
      top: document.body.scrollHeight,
      // @ts-ignore - needed since instant enum was removed
      // https://github.com/w3c/csswg-drafts/pull/8107
      behavior: 'instant',
    });
  };

  return (
    <>
      <TextareaAutosize
        autoFocus
        className={styles.writeInput}
        ref={inputRef}
        value={currBody}
        onChange={(e) => setAutoSaveTimout(e.target.value)}
        onHeightChange={correctViewport}
      />

      <footer className={styles.writeFooter} ref={scrollToBottom}>
        <p className={styles.count}>{bodyCount} words</p>

        <span>
          {saveState === 'Saved' ? (
            <GoCheck />
          ) : saveState === 'Saving' ? (
            <RotatingLines strokeColor='#f3b04e' />
          ) : (
            <FaRegSave onClick={forceSave} style={{ cursor: 'pointer' }} />
          )}
        </span>
      </footer>
    </>
  );
}
