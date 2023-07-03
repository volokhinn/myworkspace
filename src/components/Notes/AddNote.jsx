import React from 'react';

import index from '../../scss/index.module.scss';
import styles from '../../scss/components/_addnote.module.scss';
import AddButton from '../UI/AddButton';
import { useDispatch } from 'react-redux';
import { addNote } from '../../redux/slices/noteSlice';
import { useState } from 'react';

const AddNote = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const onClickAdd = () => {
    dispatch(addNote(text));
  };
  return (
    <div className={styles.card}>
      <h1 className={index.title}>Добавить заметку</h1>
      <textarea
        onInput={(e) => setText(e.target.value)}
        defaultValue={text}
        className={styles.textarea}></textarea>
      <div className={index.row__center}>
        <AddButton onClick={onClickAdd} size="60px" fontSize="3em" />
      </div>
    </div>
  );
};

export default AddNote;
