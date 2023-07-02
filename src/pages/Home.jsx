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
      close: false,
    },
    {
      icon: balanceIcon,
      title: 'balance',
      close: false,
    },
    {
      icon: notesIcon,
      title: 'notes',
      close: false,
    },
    {
      icon: eventsIcon,
      title: 'events',
      close: false,
    },
    {
      icon: blacklistIcon,
      title: 'blacklist',
      close: false,
    },
  ];

  const pageCards = pageCardValues.map((obj, i) => (
    <Link key={i} style={{ textDecoration: 'none' }} to={obj.title}>
      <Pagecard {...obj} />
    </Link>
  ));

  return (
    <div className={styles.content}>
      {pageCards} <Pagecard close={true} icon={exitIcon} title="exit" />
    </div>
  );
};

export default Home;
