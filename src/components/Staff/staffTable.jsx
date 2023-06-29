import React from 'react';

import styles from '../../scss/components/_staffTable.module.scss';

import sokolov from '../../img/staff/sokolov.png';

const staffTable = () => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>id</th>
            <th>Фамилия Имя</th>
            <th>Должность</th>
            <th>Возраст</th>
            <th>Дата рождения</th>
            <th>Начало работы</th>
          </tr>
        </thead>
        <tbody className={styles.table}>
          <tr>
            <td>
              <img src={sokolov} alt={sokolov}></img>
            </td>
            <td>#1</td>
            <td>Alex Sokolov</td>
            <td>marketing specialist</td>
            <td>18</td>
            <td>09.03.2023</td>
            <td>11.04.1999</td>
          </tr>
          <tr>
            <td>
              <img src={sokolov} alt={sokolov}></img>
            </td>
            <td>#2</td>
            <td>Alex Sokolov</td>
            <td>marketing specialist</td>
            <td>18</td>
            <td>09.03.2023</td>
            <td>11.04.1999</td>
          </tr>
          <tr>
            <td>
              <img src={sokolov} alt={sokolov}></img>
            </td>
            <td>#3</td>
            <td>Alex Sokolov</td>
            <td>marketing specialist</td>
            <td>18</td>
            <td>09.03.2023</td>
            <td>11.04.1999</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.add__row}>
        <button className={styles.add}>+</button>
      </div>
    </>
  );
};

export default staffTable;
