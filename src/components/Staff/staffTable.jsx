import React from 'react';

import styles from '../../scss/components/_staffTable.module.scss';

import sokolov from '../../img/staff/sokolov.jpg';

import { selectStaffData } from '../../redux/slices/staffSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const StaffTable = () => {
  const navigate = useNavigate();
  const { filteringStaffs } = useSelector(selectStaffData);

  const trs = filteringStaffs.map((staff, i) => {
    if (staff.isDismissed) {
      return false;
    }

    return (
      <tr onClick={() => navigate(`/staff/profile/${staff.id}`)} key={staff.id}>
        <td>
          <img className={styles.img} src={staff.imgUrl} alt={sokolov}></img>
        </td>
        <td>{i + 1}</td>
        <td>
          {staff.name} {staff.surname}
        </td>
        <td>{staff.position}</td>
        <td>18</td>
        <td>{staff.birthday.toLocaleDateString('ru-RU')}</td>
        <td>11.04.1999</td>
      </tr>
    );
  });

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>№</th>
            <th>Фамилия Имя</th>
            <th>Должность</th>
            <th>Возраст</th>
            <th>Дата рождения</th>
            <th>Начало работы</th>
          </tr>
        </thead>
        <tbody className={styles.table}>{trs}</tbody>
      </table>
      <div className={styles.add__row}>
        <button className={styles.add}>+</button>
      </div>
    </>
  );
};

export default StaffTable;
