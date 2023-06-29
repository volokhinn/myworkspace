import React from 'react';
import styles from '../../scss/staff.module.scss';
import sokolov from '../../img/staff/sokolov.png';

import StaffCategories from '../../components/Staff/StaffCategories';
import StaffTable from '../../components/Staff/staffTable';

const Staff = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__left}>
          <div className={styles.main__left_top}>
            <div className={styles.main__left_info}>
              <div className={styles.main__left_info_number}>18</div>
              <div className={styles.main__left_info_text}>
                сотрудников в <br></br> организации
              </div>
            </div>
          </div>
          <div className={styles.main__left_bottom}>
            <h2 className={styles.main__title}>Информация об организации</h2>
            <div className={styles.main__text}>Средний возраст сотрудников: 44 года</div>
            <div className={styles.main__text}>Средний возраст сотрудников: 44 года</div>
            <div className={styles.main__text}>Средний возраст сотрудников: 44 года</div>
            <div className={styles.main__text}>Средний возраст сотрудников: 44 года</div>
          </div>
        </div>
        <div className={styles.main__right}>
          <h2 className={styles.main__title}>Информация о руководителях</h2>
          <div className={styles.main__staff}>
            <div className={styles.main__staff_person}>
              <img src={sokolov} alt={sokolov}></img>
              <div className={styles.main__staff_text}>Alex Sokolov</div>
              <div className={styles.main__staff_text}>Руководитель</div>
            </div>
            <div className={styles.main__staff_person}>
              <img src={sokolov} alt={sokolov}></img>
              <div className={styles.main__staff_text}>Alex Sokolov</div>
              <div className={styles.main__staff_text}>Руководитель</div>
            </div>
            <div className={styles.main__staff_person}>
              <img src={sokolov} alt={sokolov}></img>
              <div className={styles.main__staff_text}>Alex Sokolov</div>
              <div className={styles.main__staff_text}>Руководитель WebDev</div>
            </div>
          </div>
        </div>
      </div>
      <StaffCategories />
      <StaffTable />
    </>
  );
};

export default Staff;
