import React from 'react';

import styles from '../../scss/components/_balanceTable.module.scss';

import { selectBalanceData } from '../../redux/slices/balanceSlice';

import { useSelector } from 'react-redux';

const StaffTable = () => {
  const { money } = useSelector(selectBalanceData);

  const trs = money.map((balance, i) => {
    const sum = +balance.sum;
    return (
      <tr key={balance.id} style={{ cursor: 'default' }}>
        <td>{balance.type}</td>
        <td>{sum.toLocaleString('ru-RU')} ₽</td>
        <td>{balance.text}</td>
        <td>{balance.date}</td>
      </tr>
    );
  });

  return (
    <>
      {trs.length ? (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>тип транзакции</th>
              <th>сумма</th>
              <th>комментарий</th>
              <th>дата</th>
            </tr>
          </thead>
          <tbody className={styles.table}>{trs}</tbody>
        </table>
      ) : (
        <div className={styles.notfound}>Нет транзакций</div>
      )}
    </>
  );
};

export default StaffTable;
