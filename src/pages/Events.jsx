import React from 'react';

import styles from '../scss/events.module.scss';
import index from '../scss/index.module.scss';

import AddButton from '../components/UI/AddButton';
import WhiteButton from '../components/UI/WhiteButton';

import EventCard from '../components/Events/EventCard';
import { useDispatch } from 'react-redux';
import { addEvent, clearEvents, selectEventData } from '../redux/slices/eventSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { normalizeCount } from '../Helpers/normalizeCount';

import { useRef } from 'react';

const Events = () => {
  const dispatch = useDispatch();
  const textRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const emojiRef = useRef(null);

  const { events } = useSelector(selectEventData);

  const eventsElements = events.map((event) => (
    <EventCard
      key={event.id}
      id={event.id}
      text={event.text}
      date={event.date}
      time={event.time}
      emoji={event.emoji}
    />
  ));

  const eventsElementsLength = events.length;

  const [form, setForm] = useState({
    text: '',
    date: '',
    time: '',
    emoji: '',
  });

  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const onChangeEmoji = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      handleChange('emoji', value);
    }
  };

  const onClickAdd = () => {
    if (!form.text && !form.date && !form.time && !form.emoji) {
      return;
    }

    const newEvent = {
      id: new Date().getTime(),
      ...form,
    };
    dispatch(addEvent(newEvent));
    textRef.current.value = '';
    dateRef.current.value = '';
    timeRef.current.value = '';
    emojiRef.current.value = '';
  };

  const onClickClear = () => {
    if (window.confirm('Вы уверены, что хотите очистить список ВСЕХ мероприятий?')) {
      dispatch(clearEvents());
      window.location.reload();
    }
    return;
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
        className={styles.emoji__input}
        ref={emojiRef}
        type="radio"
        value={emoji}
        id={emoji}
        name="emoji_radio"
        onChange={onChangeEmoji}
      />
      <label className={styles.emoji__label} htmlFor={emoji}>
        {emoji}
      </label>
    </>
  ));

  return (
    <>
      <WhiteButton onClick={onClickClear} text="Очистить список событий" />
      <div className={styles.main}>
        <div className={styles.main__left}>
          У вас запланировано <span className={styles.main__left_info}>{eventsElementsLength}</span>
          {normalizeCount(eventsElementsLength, ['событие', 'события', 'событий'])}
        </div>
        <div className={styles.main__right}>
          <h1 className={index.title}>Добавить событие </h1>
          <div className={styles.fields}>
            <textarea
              ref={textRef}
              onInput={(e) => handleChange('text', e.target.value)}
              className={styles.textarea}
              placeholder="Введите текст события"></textarea>

            <div className={styles.fields__inputs}>
              <input
                ref={dateRef}
                onChange={(e) => handleChange('date', e.target.value)}
                className={styles.input}
                type="text"
                placeholder="Дата (дд.мм.гг)"
              />
              <input
                ref={timeRef}
                onChange={(e) => handleChange('time', e.target.value)}
                className={styles.input}
                type="text"
                placeholder="Время (чч:мм)"
              />
            </div>
          </div>
          <div className={styles.emoji}>{emojies}</div>
          <div className={index.row__center}>
            <AddButton onClick={onClickAdd} size="60px" fontSize="3.5em" />
          </div>
        </div>
      </div>
      <div className={styles.cards}>{eventsElements}</div>
    </>
  );
};

export default Events;
