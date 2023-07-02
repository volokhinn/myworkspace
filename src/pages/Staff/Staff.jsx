import React from 'react';
import styles from '../../scss/staff.module.scss';
import index from '../../scss/index.module.scss';
import sokolov from '../../img/staff/sokolov.jpg';

import StaffCategories from '../../components/Staff/StaffCategories';
import StaffTable from '../../components/Staff/StaffTable';

import { clearFilter, findAllByDismiss, findAllHeads } from '../../redux/slices/staffSlice';

import { useDispatch, useSelector } from 'react-redux';

import { calculateAge } from '../../Helpers/getAge';
import { normalizeCount } from '../../Helpers/normalizeCount';

import { useEffect, dispatch } from 'react';

const Staff = () => {
  const staffs = useSelector(findAllByDismiss(false));
  const staffsHeads = useSelector(findAllHeads(true));

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
                сотрудников в <br></br> организации
              </div>
            </div>
          </div>
          <div className={styles.main__left_bottom}>
            <h2 className={index.title}>Информация об организации</h2>
            <div className={index.text}>
              Средний возраст сотрудников: {avgAge()}{' '}
              {normalizeCount(avgAge(), ['год', 'года', 'лет'])}
            </div>
            {/* <div className={index.text}>Средний возраст сотрудников: 44 года</div>
            <div className={index.text}>Средний возраст сотрудников: 44 года</div>
            <div className={index.text}>Средний возраст сотрудников: 44 года</div> */}
          </div>
        </div>
        <div className={styles.main__right}>
          <h2 className={index.title}>Информация о руководителях</h2>
          <div className={styles.main__staff}>
            <div className={styles.main__staff_person}>
              <img className={styles.img} src={sokolov} alt={sokolov}></img>
              <div className={styles.main__staff_text}>Ivan Tsybulnik</div>
              <div className={styles.main__staff_text}>Основатель</div>
            </div>
            <div className={styles.main__staff_person}>
              <img className={styles.img} src={sokolov} alt={sokolov}></img>
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
