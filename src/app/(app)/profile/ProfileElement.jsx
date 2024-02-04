'use client';
import { useContext } from 'react';
import { SeekerContext } from '@/app/(app)/ContextProvider.jsx';

const DEFAULTS = {
  firstname: 'Far',
  lastname: 'Traveler',
};

export default function ProfileElement({ property }) {
  const { seeker } = useContext(SeekerContext);

  return <>{seeker ? seeker[property] : DEFAULTS[property]}</>;
}
