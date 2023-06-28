import React from 'react';
import styles from '../scss/components/_header.module.scss';
import headerCalendar from '../icons/headerCalendar.svg';
import headerClock from '../icons/headerClock.svg';
import { useState, useEffect } from 'react';

const Header = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>MYWORKSPACE</div>
      <div className={styles.datetime}>
        <img src={headerCalendar} alt="calendar" />{' '}
        {dateState.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        })}
        <img src={headerClock} alt="clock" />{' '}
        {dateState.toLocaleString('ru-RU', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        })}
        <div>nsk, Ru</div>
      </div>
    </div>
  );
};

export default Header;
