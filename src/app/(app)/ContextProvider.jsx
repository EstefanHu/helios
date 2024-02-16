'use client';
import { createContext, useEffect, useState } from 'react';
import getCurrentSession from '../actions/getCurrentSession.js';

export const LayoutContext = createContext({});
export const TravelerContext = createContext(null);
export const EntryContext = createContext([]);

export function ContextProvider({ children }) {
  const [layout, setLayout] = useState({});
  const [traveler, setTraveler] = useState(null);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getCurrentSession().then((data) => {
      setTraveler(data.traveler);
    });
  }, [setTraveler]);

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      <TravelerContext.Provider value={{ traveler, setTraveler }}>
        <EntryContext.Provider value={{ entries, setEntries }}>{children}</EntryContext.Provider>
      </TravelerContext.Provider>
    </LayoutContext.Provider>
  );
}
