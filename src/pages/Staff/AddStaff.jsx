import React from 'react';

import styles from '../../scss/addstaff.module.scss';
import index from '../../scss/index.module.scss';

import done from '../../icons/done.svg';

import Button from '../../components/UI/Button';

const depsArray = ['SMM', 'WebDev', 'Design', 'Context', 'Target'];

const AddStaff = () => {
  window.scrollTo(0, 0);

  return (
    <div className={styles.main}>
      <h1 className={index.title}>Добавить нового сотрудника</h1>
      <div className={styles.photo__wrapper}>
        <input className={styles.photo__input} type="file" />
        <label className={styles.photo__label}>+</label>
      </div>

      <div className={styles.field}>
        <label className={styles.field__label}>Имя</label>
        <input type="text" className={styles.field__input} placeholder="Введите имя" />
        <label className={styles.field__label}>Фамилия</label>
        <input type="text" className={styles.field__input} placeholder="Введите фамилию" />
        <label className={styles.field__label}>Дата рождения</label>
        <input type="text" className={styles.field__input} placeholder="дд.мм.гггг" />
        <label className={styles.field__label}>Отдел</label>
        <div>
          {depsArray.map((dep) => {
            return (
              <div className={styles.field__radio_group}>
                <input
                  key={dep + '4'}
                  className={styles.field__radio}
                  type="radio"
                  name="dep_radio"
                  value={dep}
                  id={dep}
                />
                <label key={dep} className={styles.field__radio_label} htmlFor={dep}>
                  {dep}
                </label>
              </div>
            );
          })}
        </div>

        <label className={styles.field__label}>Должность</label>
        <input type="text" className={styles.field__input} placeholder="Введите должность" />

        <div className={index.row__center}>
          <Button icon={done}>Добавить</Button>
        </div>
      </div>
    </div>
  );
};

export default AddStaff;
