import React from 'react';
import styles from '../scss/components/_pageCard.module.scss';

const pageCard = ({ close, icon, title }) => {
  const clickExit = () => {
    if (close) {
      let isClose = window.confirm('Вы уверены, что хотите выйти?');
      if (isClose) {
        window.close();
      }
    }
    window.opener = null;
  };

  return (
    <div onClick={() => clickExit()} className={styles.card}>
      <img className={styles.icon} src={icon} alt={icon} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default pageCard;
