import React from 'react';
import styles from '../scss/staffProfile.module.scss';
import index from '../scss/index.module.scss';
import '../scss/staffProfile.module.scss';
import sokolov from '../img/staff/sokolov.jpg';
import send from '../icons/send.svg';
import dismiss from '../icons/dismiss.svg';
import Button from '../components/UI/Button';

import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { findStaffById, dissmission, clearFilter } from '../redux/slices/staffSlice';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { calculateAge } from '../Helpers/getAge';

const StaffProfile = () => {
  const { id } = useParams();

  const staff = useSelector(findStaffById(+id));

  const dispatch = useDispatch();

  const navigate = useNavigate();

  if (!staff) {
    return <div>не найдено :С</div>;
  }

  const activities = staff.activities.map((activity) => {
    return (
      <div key={activity.id} className={styles.actions}>
        <div className={styles.actions__date}>{activity.date}</div>

        <div className={styles.actions__text}>
          {activity.type === 'warn' ? 'Предупреждение: ' : ''}
          {activity.text}
        </div>
      </div>
    );
  });

  const onClickDismiss = () => {
    dispatch(dissmission(+staff.id));
    dispatch(clearFilter());
    setTimeout(() => {
      navigate('/staff');
    }, 300);
  };

  return (
    <>
      <div className={styles.profile}>
        <div className={styles.left}>
          <div className={styles.info__top}>
            <h2 className={index.title}>Информация о сотруднике</h2>
            <div className={styles.info}>
              <div className={styles.info_left}>
                <img className={styles.img} src={staff.imgUrl} alt={sokolov}></img>
              </div>
              <div className={styles.info_right}>
                <div className={index.text}>Имя: {staff.name}</div>
                <div className={index.text}>Фамилия: {staff.surname}</div>
                <div className={index.text}>Возраст: {calculateAge(new Date(staff.birthday))}</div>
                <div className={index.text}>
                  Дата рождения: {new Date(staff.birthday).toLocaleDateString('ru-RU')}
                </div>
              </div>
            </div>
            <div className={index.text}>Отдел: {staff.department}</div>
            <div className={index.text}>Должность: {staff.position} </div>
            <div className={index.text}>
              Работает в организации с {new Date(staff.inviteDate).toLocaleDateString('ru-RU')}
            </div>
          </div>
          <div className={styles.info__bottom}>
            <h2 className={index.title}>Действия над сотрудником</h2>
            <div className={styles.checkbox}>
              <label className={styles.switch} htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className={`${styles.slider} ${styles.round}`}></div>
              </label>
              <label className={index.label}>
                Назначить руководителем отдела {staff.department}
              </label>
            </div>

            <div className={styles.input}>
              <input type="text" placeholder="Выдать предупреждение"></input>
              <a href="/">
                <img src={send} alt={send}></img>
              </a>
            </div>
            <Button onClick={() => onClickDismiss()} icon={dismiss}>
              Уволить
            </Button>
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={index.title}>Действия над сотрудником</h2>
          {activities}
        </div>
      </div>
    </>
  );
};

export default StaffProfile;
