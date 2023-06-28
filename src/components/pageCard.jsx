import React from 'react';
import styles from '../scss/components/_pageCard.module.scss';

const pageCard = ({ icon, title }) => {
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={icon} alt={icon} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default pageCard;
