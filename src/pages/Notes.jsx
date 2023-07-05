import React from 'react';
import AddNote from '../components/Notes/AddNote';
import NoteCard from '../components/Notes/NoteCard';
import styles from '../scss/notes.module.scss';
import { useSelector } from 'react-redux';
import { selectNoteData } from '../redux/slices/noteSlice';
import WhiteButton from '../components/UI/WhiteButton';
import { clearNotes } from '../redux/slices/noteSlice';
import { useDispatch } from 'react-redux';

const Notes = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector(selectNoteData);

  const notesElements = notes.map((note) => (
    <NoteCard key={note.id} id={note.id} text={note.text} />
  ));

  const onClickClear = () => {
    if (window.confirm('Вы уверены, что хотите очистить список ВСЕХ заметок?')) {
      dispatch(clearNotes());
      window.location.reload();
    }
    return;
  };

  return (
    <>
      <WhiteButton onClick={onClickClear} text="Очистить список заметок" />
      <div className={styles.wrapper}>
        <AddNote />
        {notesElements}
      </div>
    </>
  );
};
export default Notes;
