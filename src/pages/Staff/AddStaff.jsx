import React from 'react';

import styles from '../../scss/addstaff.module.scss';
import index from '../../scss/index.module.scss';

import done from '../../icons/done.svg';

import Button from '../../components/UI/Button';

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { addStaff, clearFilter } from '../../redux/slices/staffSlice';

import { useNavigate } from 'react-router-dom';

const depsArray = ['SMM', 'WebDev', 'Design', 'Context', 'Target'];

const AddStaff = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // window.scrollTo(0, 0);

  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [depart, setDepart] = useState('SMM');
  const [position, setPosition] = useState('');

  const onNameChanged = (e) => setName(e.target.value);
  const onSurNameChanged = (e) => setSurName(e.target.value);
  const onBirthdayChanged = (e) => setBirthday(e.target.value);
  const onPositionChange = (e) => setPosition(e.target.value);

  const onSubmit = () => {
    if (!name && !surname && !birthday && !position) {
      return;
    }
    const newStaff = {
      id: new Date().getTime(),
      name,
      surname,
      birthday: new Date(Date.parse(birthday)).toLocaleDateString('ru-RU'),
      department: depart,
      position,
    };
    dispatch(addStaff(newStaff));
    dispatch(clearFilter());
    setTimeout(() => {
      navigate('/staff');
    }, 300);
  };
  const onChangeDep = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDepart(value);
    }
  };

  return (
    <div className={styles.main}>
      <h1 className={index.title}>Добавить нового сотрудника</h1>
      <div className={styles.photo__wrapper}>
        <input className={styles.photo__input} type="file" />
        <label className={styles.photo__label}>+</label>
      </div>

      <form className={styles.field}>
        <label className={styles.field__label}>Имя</label>
        <input
          type="text"
          className={styles.field__input}
          placeholder="Введите имя"
          value={name}
          onChange={onNameChanged}
        />
        <label className={styles.field__label}>Фамилия</label>
        <input
          type="text"
          className={styles.field__input}
          placeholder="Введите фамилию"
          onChange={onSurNameChanged}
          value={surname}
        />
        <label className={styles.field__label}>Дата рождения</label>
        <input
          type="text"
          className={styles.field__input}
          placeholder="дд.мм.гггг"
          value={birthday}
          onChange={onBirthdayChanged}
        />
        <label className={styles.field__label}>Отдел</label>
        <div>
          {depsArray.map((dep) => {
            return (
              <div key={dep} className={styles.field__radio_group}>
                <input
                  className={styles.field__radio}
                  type="radio"
                  name="dep_radio"
                  value={dep}
                  id={dep}
                  checked={depart === dep}
                  onChange={onChangeDep}
                />
                <label className={styles.field__radio_label} htmlFor={dep}>
                  {dep}
                </label>
              </div>
            );
          })}
        </div>

        <label className={styles.field__label}>Должность</label>
        <input
          type="text"
          className={styles.field__input}
          placeholder="Введите должность"
          value={position}
          onChange={onPositionChange}
        />

        <div className={index.row__center}>
          <Button onClick={onSubmit} icon={done}>
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddStaff;
