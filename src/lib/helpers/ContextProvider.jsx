'use client';
import { createContext, useState } from 'react';

export const ThemeContext = createContext('light');
export const SeekerContext = createContext(null);
export const EntryContext = createContext([]);

export function ContextProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [seeker, setSeeker] = useState(null);
  const [entries, setEntries] = useState([]);

  return (
    <ThemeContext.Provider value={theme}>
      <SeekerContext.Provider value={{ seeker, setSeeker }}>
        <EntryContext.Provider value={[]}>{children}</EntryContext.Provider>
      </SeekerContext.Provider>
    </ThemeContext.Provider>
  );
}
