import React from 'react';

import styles from '../scss/events.module.scss';
import index from '../scss/index.module.scss';

import AddButton from '../components/UI/AddButton';

import EventCard from '../components/Events/EventCard';

const Events = () => {
  const onChangeEmoji = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      console.log(e.target.value);
    }
  };

  const emojiArray = [
    '🎉',
    '🤑',
    '💕',
    '💣',
    '🍿',
    '☕',
    '🍽',
    '🚀',
    '🔥',
    '🎁',
    '🏆',
    '🎯',
    '🎮',
    '📞',
    '❗',
  ];

  const emojies = emojiArray.map((emoji) => (
    <>
      <input
        onChange={onChangeEmoji}
        className={styles.emoji__input}
        type="radio"
        value={emoji}
        id={emoji}
        name="emoji_radio"
      />
      <label className={styles.emoji__label} htmlFor={emoji}>
        {emoji}
      </label>
    </>
  ));

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__left}>
          У вас запланировано <span className={styles.main__left_info}>10</span> событий
        </div>
        <div className={styles.main__right}>
          <h1 className={index.title}>Добавить событие</h1>
          <div className={styles.fields}>
            <textarea className={styles.textarea} placeholder="Введите текст события"></textarea>

            <div className={styles.fields__inputs}>
              <input className={styles.input} type="text" placeholder="Дата (дд.мм.гг)" />
              <input className={styles.input} type="text" placeholder="Время (чч:мм)" />
            </div>
          </div>
          <div className={styles.emoji}>{emojies}</div>
          <div className={index.row__center}>
            <AddButton size="60px" fontSize="3.5em" />
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </>
  );
};

export default Events;
