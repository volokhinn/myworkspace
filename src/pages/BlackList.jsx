import React from 'react';

import styles from '../scss/components/_staffTable.module.scss';

import sokolov from '../img/staff/sokolov.jpg';

import { findAllByDismiss } from '../redux/slices/staffSlice';
import { useSelector } from 'react-redux';
import { calculateAge } from '../Helpers/getAge';

const BlackList = () => {
  const allDis = useSelector(findAllByDismiss(true));

  const trs = allDis.map((staff, i) => {
    return (
      <tr key={staff.id}>
        <td>
          <img className={styles.img} src={staff.imgUrl} alt={sokolov}></img>
        </td>
        <td>{i + 1}</td>
        <td>
          {staff.name} {staff.surname}
        </td>
        <td>{staff.position}</td>
        <td>{calculateAge(new Date(staff.birthday))}</td>
        <td>{new Date(staff.birthday).toLocaleDateString('ru-RU')}</td>
        <td>{staff.dismissDate}</td>
      </tr>
    );
  });

  return (
    <>
      {trs.length ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>№</th>
              <th>Фамилия Имя</th>
              <th>Должность</th>
              <th>Возраст</th>
              <th>Дата рождения</th>
              <th>Дата увольнения</th>
            </tr>
          </thead>
          <tbody className={styles.table}>{trs}</tbody>
        </table>
      ) : (
        <div className={styles.notfound}>Нет уволенных сотрудников</div>
      )}
    </>
  );
};

export default BlackList;
