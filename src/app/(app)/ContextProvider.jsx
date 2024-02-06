'use client';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext('light');
export const SeekerContext = createContext(null);
export const EntryContext = createContext([]);

export function ContextProvider({ children, getCurrentSession }) {
  const [theme, setTheme] = useState('light');
  const [seeker, setSeeker] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getCurrentSession().then((data) => {
      setSeeker(data.seeker);
    });
  }, [setSeeker]);

  return (
    <ThemeContext.Provider value={theme}>
      <SeekerContext.Provider value={{ seeker, setSeeker }}>
        <EntryContext.Provider value={[]}>{children}</EntryContext.Provider>
      </SeekerContext.Provider>
    </ThemeContext.Provider>
  );
}
