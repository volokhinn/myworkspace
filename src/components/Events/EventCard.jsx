import React from 'react';
import styles from '../../scss/components/_eventcard.module.scss';
import edit from '../../icons/edit.svg';
import del from '../../icons/delete.svg';

const EventCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        🎉 <div className={styles.card__status}></div>
      </div>
      <div className={styles.card__text}>
        123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123123
      </div>
      <div className={styles.card__bottom}>
        11.10.2001
        <div className={styles.icons}>
          <img src={edit} alt={edit} />
          <img src={del} alt={del} />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
