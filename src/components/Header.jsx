import React from 'react';
import styles from '../scss/components/_header.module.scss';
import headerCalendar from '../icons/headerCalendar.svg';
import headerClock from '../icons/headerClock.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useHref } from 'react-router-dom';

const Header = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          MYWORKSPACE
        </Link>
      </div>
      {useHref() === '/' ? (
        ''
      ) : (
        <button className={styles.goback} onClick={() => navigate(-1)}>
          Назад
        </button>
      )}
      <div className={styles.datetime}>
        <img src={headerCalendar} alt="calendar" />
        {dateState.toLocaleDateString('ru-RU', {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric',
        })}
        <img src={headerClock} alt="clock" />
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
