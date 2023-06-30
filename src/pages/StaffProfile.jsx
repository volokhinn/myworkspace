import React from 'react';
import styles from '../scss/staffProfile.module.scss';
import index from '../scss/index.module.scss';
import '../scss/staffProfile.module.scss';
import sokolov from '../img/staff/sokolov.jpg';
import send from '../icons/send.svg';
import dismiss from '../icons/dismiss.svg';

import { useState } from 'react';

const StaffProfile = () => {
  const [click, setClick] = useState(0);
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.left}>
          <div className={styles.info__top}>
            <h2 className={index.title}>Информация о сотруднике</h2>
            <div className={styles.info}>
              <div className={styles.info_left}>
                <img className={styles.img} src={sokolov} alt={sokolov}></img>
              </div>
              <div className={styles.info_right}>
                <div className={index.text}>Имя: Alex</div>
                <div className={index.text}>Фамилия: Sokolov</div>
                <div className={index.text}>Возраст: 18</div>
                <div className={index.text}>Дата рождения: 11.10.2001</div>
              </div>
            </div>
            <div className={index.text}>Отдел: WebDev</div>
            <div className={index.text}>Должность: Web developer</div>
            <div className={index.text}>Работает в организации с 11.10.2001</div>
          </div>
          <div className={styles.info__bottom}>
            <h2 className={index.title}>Действия над сотрудником</h2>
            <div className={styles.checkbox}>
              <label class={styles.switch} for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class={`${styles.slider} ${styles.round}`}></div>
              </label>
              <label className={index.label}>Назначить руководителем отдела "Отдел"</label>
            </div>

            <div class={styles.input}>
              <input type="text" placeholder="Выдать предупреждение"></input>
              <a href="/">
                <img src={send} alt={send}></img>
              </a>
            </div>
            <a>
              <div
                className={styles.button}
                onClick={() => setClick(1)}
                /*onAnimationEnd={() => setClick(0)} */
                click={click}>
                <img src={dismiss} alt={dismiss}></img>
                Уволить
              </div>
            </a>
          </div>
        </div>
        <div className={styles.right}>
          <h2 className={index.title}>Действия над сотрудником</h2>
          <div className={styles.actions}>
            <div className={styles.actions__date}>11.10.2001</div>
            <div className={styles.actions__text}>Принят в организацию</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actions__date}>11.10.2001</div>
            <div className={styles.actions__text}>Предупреждение: Опоздание на рабочее место</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actions__date}>11.10.2001</div>
            <div className={styles.actions__text}>Предупреждение: Просрочена сдача проекта</div>
          </div>
          <div className={styles.actions}>
            <div className={styles.actions__date}>11.10.2001</div>
            <div className={styles.actions__text}>Уволен из организации</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffProfile;
