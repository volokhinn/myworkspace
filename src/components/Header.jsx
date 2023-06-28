import React from 'react';
import styles from '../scss/components/_header.module.scss';
import headerCalendar from '../icons/headerCalendar.svg';
import headerClock from '../icons/headerClock.svg';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>MYWORKSPACE</div>
      <div className={styles.datetime}>
        <img src={headerCalendar} alt="calendar" /> 20.02.23
        <img src={headerClock} alt="clock" /> 13:37
      </div>
    </div>
  );
};

export default Header;
