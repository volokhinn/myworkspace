import React from 'react';
import styles from '../../scss/components/_notecard.module.scss';
import edit from '../../icons/edit.svg';
import del from '../../icons/delete.svg';
import done from '../../icons/done2.svg';
import { editNote, removeNote } from '../../redux/slices/noteSlice';
import { useDispatch } from 'react-redux';

const NoteCard = ({ id, text }) => {
  const dispatch = useDispatch();
  const [area, setArea] = React.useState(text);
  const [isEdit, setIsEdit] = React.useState(false);

  const onClickPencil = () => {
    if (isEdit) {
      setIsEdit(false);
      if (!area.trim()) {
        setArea(text);
        return;
      }
      dispatch(editNote({ id, area }));
      return;
    }

    setIsEdit(true);
  };

  const onClickTrash = () => {
    dispatch(removeNote({ id }));
  };

  return (
    <div className={styles.card}>
      {!isEdit ? (
        <>
          <div className={styles.text}>{text}</div>
          <div className={styles.icons}>
            <img onClick={onClickPencil} src={edit} alt={edit} />
            <img onClick={onClickTrash} src={del} alt={del} />
          </div>
        </>
      ) : (
        <>
          <textarea className={styles.textarea} onInput={(e) => setArea(e.target.value)}>
            {area}
          </textarea>
          <div className={styles.icons}>
            <img onClick={onClickPencil} src={done} alt={done} />
            <img onClick={onClickTrash} src={del} alt={del} />
          </div>
        </>
      )}
    </div>
  );
};

export default NoteCard;
