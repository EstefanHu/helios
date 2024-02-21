'use client';
import { createContext, useState } from 'react';

export const LayoutContext = createContext({});
export const TravelerContext = createContext(null);
export const EntryContext = createContext([]);

export function ContextProvider({ children, currentSession }) {
  const [layout, setLayout] = useState({});
  const [traveler, setTraveler] = useState(currentSession);
  const [entries, setEntries] = useState([]);

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      <TravelerContext.Provider value={{ traveler, setTraveler }}>
        <EntryContext.Provider value={{ entries, setEntries }}>{children}</EntryContext.Provider>
      </TravelerContext.Provider>
    </LayoutContext.Provider>
  );
}
