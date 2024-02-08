'use client';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext('light');
export const TravelerContext = createContext(null);
export const EntryContext = createContext([]);

export function ContextProvider({ children, getCurrentSession }) {
  const [theme, setTheme] = useState('light');
  const [traveler, setTraveler] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getCurrentSession().then((data) => {
      setTraveler(data.traveler);
    });
  }, [setTraveler]);

  return (
    <ThemeContext.Provider value={theme}>
      <TravelerContext.Provider value={{ traveler, setTraveler }}>
        <EntryContext.Provider value={[]}>{children}</EntryContext.Provider>
      </TravelerContext.Provider>
    </ThemeContext.Provider>
  );
}
