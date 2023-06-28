import React from 'react';
import Pagecard from '../components/pageCard';
import staffIcon from '../icons/staffIcon.svg';
import balanceIcon from '../icons/balanceicon.svg';
import notesIcon from '../icons/notesicon.svg';
import eventsIcon from '../icons/eventsicon.svg';
import blacklistIcon from '../icons/blacklisticon.svg';
import exitIcon from '../icons/exiticon.svg';
import styles from '../scss/components/_home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  const pageCardValues = [
    {
      icon: staffIcon,
      title: 'staff',
    },
    {
      icon: balanceIcon,
      title: 'balance',
    },
    {
      icon: notesIcon,
      title: 'notes',
    },
    {
      icon: eventsIcon,
      title: 'events',
    },
    {
      icon: blacklistIcon,
      title: 'blacklist',
    },
    {
      icon: exitIcon,
      title: 'exit',
    },
  ];

  const pageCards = pageCardValues.map((obj) => (
    <Link style={{ textDecoration: 'none' }} key={new Date().getTime()} to={obj.title}>
      <Pagecard key={new Date().getTime()} {...obj} />
    </Link>
  ));
  return (
  <div className={styles.content}>{pageCards}</div>
  
  );
};

export default Home;
