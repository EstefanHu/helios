'use client';

export default function EntryDayWrapper({ children }) {
  return (
    <div className='entry-day-wrapper'>
      <div className='date-box'>
        <p className='date-box--number'>07</p>
        <p className='date-box--weekday'>Thu</p>
      </div>
      {children}
    </div>
  );
}
