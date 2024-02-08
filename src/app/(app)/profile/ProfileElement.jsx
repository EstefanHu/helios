'use client';
import { useContext } from 'react';
import { TravelerContext } from '@/app/(app)/ContextProvider.jsx';

const DEFAULTS = {
  firstname: 'Far',
  lastname: 'Traveler',
};

export default function ProfileElement({ property }) {
  const { traveler } = useContext(TravelerContext);

  return <>{traveler ? traveler[property] : DEFAULTS[property]}</>;
}
