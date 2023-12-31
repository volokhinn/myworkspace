import React from 'react';

import styles from '../../scss/components/_staffTable.module.scss';
import index from '../../scss/index.module.scss';

import sokolov from '../../img/staff/sokolov.jpg';

import { selectStaffData } from '../../redux/slices/staffSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { calculateAge } from '../../Helpers/getAge';

import AddButton from '../UI/AddButton';

const StaffTable = () => {
  const navigate = useNavigate();
  const { filteringStaffs } = useSelector(selectStaffData);

  const trs = filteringStaffs.map((staff, i) => {
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
        <td>{calculateAge(new Date(staff.birthday))}</td>
        <td>{new Date(staff.birthday).toLocaleDateString('ru-RU')}</td>
        <td>{new Date(staff.inviteDate).toLocaleDateString('ru-RU')}</td>
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
              <th>Начало работы</th>
            </tr>
          </thead>
          <tbody className={styles.table}>{trs}</tbody>
        </table>
      ) : (
        <div className={styles.notfound}>Нет сотрудников из этого отдела</div>
      )}
      <div className={index.row__center}>
        <Link to="/staff/add-staff" style={{ textDecoration: 'none' }}>
          <AddButton size="100px" fontSize="4.8em" />
        </Link>
      </div>
    </>
  );
};

export default StaffTable;
