'use client';
import { createContext, useEffect, useState } from 'react';

export const LayoutContext = createContext({});
export const TravelerContext = createContext(null);
export const EntryContext = createContext([]);

export function ContextProvider({ children, getCurrentSession }) {
  const [layout, setLayout] = useState({});
  const [traveler, setTraveler] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getCurrentSession().then((data) => {
      setTraveler(data.traveler);
    });
  }, [getCurrentSession, setTraveler]);

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      <TravelerContext.Provider value={{ traveler, setTraveler }}>
        <EntryContext.Provider value={{ entries, setEntries }}>{children}</EntryContext.Provider>
      </TravelerContext.Provider>
    </LayoutContext.Provider>
  );
}
