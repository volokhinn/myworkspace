import React from 'react';
import Pagecard from '../components/pageCard';
import staffIcon from '../icons/staffIcon.svg';
import balanceIcon from '../icons/balanceicon.svg';
import notesIcon from '../icons/notesicon.svg';
import eventsIcon from '../icons/eventsicon.svg';
import blacklistIcon from '../icons/blacklisticon.svg';
import exitIcon from '../icons/exiticon.svg';
import styles from '../scss/components/_home.module.scss';

export const Home = () => {
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

  const pageCards = pageCardValues.map((obj) => <Pagecard key={new Date().getTime()} {...obj} />);
  return <div className={styles.content}>{pageCards}</div>;
};

export default Home;
