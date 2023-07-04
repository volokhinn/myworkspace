import React from 'react';
import styles from '../../scss/components/_eventcard.module.scss';
import edit from '../../icons/edit.svg';
import del from '../../icons/delete.svg';
import { editEvent, removeEvent } from '../../redux/slices/eventSlice';
import { useDispatch } from 'react-redux';
import { compareDate } from '../../Helpers/getDate';

const EventCard = ({ id, text, date, time, emoji }) => {
  const dispatch = useDispatch();

  const onClickTrash = () => {
    dispatch(removeEvent({ id }));
  };

  const [area, setArea] = React.useState(text);
  const [areadate, setAreaDate] = React.useState(date);
  const [areatime, setAreaTime] = React.useState(time);
  const [isEdit, setIsEdit] = React.useState(false);

  const onClickPencil = () => {
    if (isEdit) {
      setIsEdit(false);
      if (!area.trim()) {
        setArea(text);
        return;
      }
      if (!areadate.trim()) {
        setAreaDate(date);
        return;
      }
      if (!areatime.trim()) {
        setAreaTime(time);
        return;
      }
      dispatch(editEvent({ id, area, areadate, areatime }));
      return;
    }

    setIsEdit(true);
  };
  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        {emoji}
        {compareDate(date) ? (
          <div className={styles.card__status_active}></div>
        ) : (
          <div className={styles.card__status}></div>
        )}
      </div>
      {!isEdit ? (
        <>
          <div className={styles.card__text}>{text}</div>
          <div className={styles.card__bottom}>
            {date} {time}
            <div className={styles.icons}>
              <img onClick={onClickPencil} src={edit} alt={edit} />
              <img onClick={onClickTrash} src={del} alt={del} />
            </div>
          </div>
        </>
      ) : (
        <>
          <textarea className={styles.textarea} onInput={(e) => setArea(e.target.value)}>
            {area}
          </textarea>
          <div className={styles.card__bottom}>
            <input
              className={styles.input}
              onInput={(e) => setAreaDate(e.target.value)}
              value={areadate}
            />
            <input
              className={styles.input}
              onInput={(e) => setAreaTime(e.target.value)}
              value={areatime}
            />
            <div className={styles.icons}>
              <img onClick={onClickPencil} src={edit} alt={edit} />
              <img onClick={onClickTrash} src={del} alt={del} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EventCard;
