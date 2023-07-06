import React from 'react';
import styles from '../../scss/staff.module.scss';
import index from '../../scss/index.module.scss';
import denis from '../../img/staff/denis.jpg';
import ivan from '../../img/staff/ivan.jpg';
import anna from '../../img/staff/anna.jpg';

import StaffCategories from '../../components/Staff/StaffCategories';
import StaffTable from '../../components/Staff/StaffTable';

import {
  clearFilter,
  findAllByDismiss,
  findAllHeads,
  findStaffByDep,
} from '../../redux/slices/staffSlice';

import { useDispatch, useSelector } from 'react-redux';

import { calculateAge } from '../../Helpers/getAge';
import { normalizeCount } from '../../Helpers/normalizeCount';

import { useEffect } from 'react';

const Staff = () => {
  const staffs = useSelector(findAllByDismiss(false));

  const staffsHeads = useSelector(findAllHeads(true));

  const staffSMM = useSelector(findStaffByDep('SMM')).length;
  const staffWebDev = useSelector(findStaffByDep('WebDev')).length;
  const staffContext = useSelector(findStaffByDep('Context')).length;
  const staffDesign = useSelector(findStaffByDep('Design')).length;
  const staffTarget = useSelector(findStaffByDep('Target')).length;
  const staffManagment = useSelector(findStaffByDep('Managment')).length;
  const staffSEO = useSelector(findStaffByDep('SEO')).length;

  const staffsLength = staffs.length;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFilter());
  }, []);

  const avgAge = () => {
    return Math.ceil(
      staffs.reduce((acc, item) => {
        acc += calculateAge(new Date(item.birthday));
        return acc;
      }, 0) / (staffs.length || 1),
    );
  };

  const heads = staffsHeads.map((staffHead) => {
    return (
      <div className={styles.main__staff_person}>
        <img className={styles.img} src={staffHead.imgUrl} alt={staffHead.imgUrl}></img>
        <div className={styles.main__staff_text}>
          {staffHead.name} {staffHead.surname}
        </div>
        <div className={styles.main__staff_text}>Руководитель {staffHead.department}</div>
      </div>
    );
  });

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__left}>
          <div className={styles.main__left_top}>
            <div className={styles.main__left_info}>
              <div className={styles.main__left_info_number}>{staffs.length}</div>
              <div className={styles.main__left_info_text}>
                {normalizeCount(staffsLength, ['сотрудник', 'сотрудника', 'сотрудников'])} в{' '}
                <br></br> организации
              </div>
            </div>
          </div>
          <div className={styles.main__left_bottom}>
            <h2 className={index.title}>Информация об организации</h2>
            <div className={index.text}>
              Средний возраст сотрудников: {avgAge()}{' '}
              {normalizeCount(avgAge(), ['год', 'года', 'лет'])}
            </div>
            <div className={index.text}>
              Отдел SMM: {staffSMM}{' '}
              {normalizeCount(staffSMM, ['сотрудник', 'сотрудника', 'сотрудников'])}
            </div>
            <div className={index.text}>
              Отдел WebDev: {staffWebDev}{' '}
              {normalizeCount(staffWebDev, ['сотрудник', 'сотрудника', 'сотрудников'])}
            </div>
            <div className={index.text}>
              Отдел Context: {staffContext}{' '}
              {normalizeCount(staffContext, ['сотрудник', 'сотрудника', 'сотрудников'])}
            </div>
            <div className={index.text}>
              Отдел Design: {staffDesign}{' '}
              {normalizeCount(staffDesign, ['сотрудник', 'сотрудника', 'сотрудников'])}
            </div>
            <div className={index.text}>
              Отдел Target: {staffTarget}{' '}
              {normalizeCount(staffTarget, ['сотрудник', 'сотрудника', 'сотрудников'])}
            </div>
            <div className={index.text}>
              Отдел SEO: {staffSEO}{' '}
              {normalizeCount(staffManagment, ['сотрудник', 'сотрудника', 'сотрудников'])}
            </div>
            <div className={index.text}>
              Отдел Managment: {staffManagment}{' '}
              {normalizeCount(staffSEO, ['сотрудник', 'сотрудника', 'сотрудников'])}
            </div>
          </div>
        </div>
        <div className={styles.main__right}>
          <h2 className={index.title}>Информация о руководителях</h2>
          <div className={styles.main__staff}>
            <div className={styles.main__staff_person}>
              <img className={styles.img} src={ivan} alt={ivan}></img>
              <div className={styles.main__staff_text}>Ivan Tsybulnik</div>
              <div className={styles.main__staff_text}>Основатель</div>
            </div>
            <div className={styles.main__staff_person}>
              <img className={styles.img} src={anna} alt={anna}></img>
              <div className={styles.main__staff_text}>Anna Tsybulnik</div>
              <div className={styles.main__staff_text}>Основатель</div>
            </div>
            <div className={styles.main__staff_person}>
              <img className={styles.img} src={denis} alt={denis}></img>
              <div className={styles.main__staff_text}>Denis Volostnov</div>
              <div className={styles.main__staff_text}>Операционный директор</div>
            </div>
            {heads}
          </div>
        </div>
      </div>
      <StaffCategories />
      <StaffTable />
    </>
  );
};

export default Staff;
