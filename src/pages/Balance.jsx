import React from 'react';
import styles from '../scss/balance.module.scss';
import index from '../scss/index.module.scss';
import BalanceTable from '../components/Balance/BalanceTable';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  addMoney,
  deleteMoney,
  clearMoney,
  clearMoneyByMonth,
  selectBalanceDeposit,
  selectBalanceWithdrawal,
} from '../redux/slices/balanceSlice';
import { useRef } from 'react';
import WhiteButton from '../components/UI/WhiteButton';
import { useSelector } from 'react-redux';

import { abbreviate_number } from '../Helpers/abbreviateNumber';

const Balance = () => {
  const dispatch = useDispatch();

  const depositArray = useSelector(selectBalanceDeposit);
  const withdrawalArray = useSelector(selectBalanceWithdrawal);

  let countDeposit = 0;
  let countWithdrawal = 0;

  const deposit = depositArray.map((money) => (countDeposit = countDeposit + +money.sum));
  const withdrawal = withdrawalArray.map(
    (money) => (countWithdrawal = countWithdrawal + +money.sum),
  );

  let countMoney = countDeposit - countWithdrawal;

  const moneyRef = useRef(null);
  const textRef = useRef(null);
  const [form, setForm] = useState({
    money: '',
    text: '',
  });

  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const onClickAdd = () => {
    if (!form.money && !form.text) {
      return;
    }

    const newTrans = {
      type: 'пополнение',
      ...form,
    };
    dispatch(addMoney(newTrans));
    textRef.current.value = '';
    moneyRef.current.value = '';
  };

  const onClickWithdraw = () => {
    if (!form.money && !form.text) {
      return;
    }

    const newTrans = {
      type: 'вывод',
      ...form,
    };
    dispatch(deleteMoney(newTrans));
    textRef.current.value = '';
    moneyRef.current.value = '';
  };

  const onClickClear = () => {
    if (window.confirm('Вы уверены, что хотите очистить список ВСЕХ транзакций?')) {
      dispatch(clearMoney());
      window.location.reload();
    }
    return;
  };

  const onClickClearByMonth = () => {
    if (window.confirm('Вы уверены, что хотите очистить список транзакций за текущий месяц?')) {
      dispatch(clearMoneyByMonth());
    }
    return;
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__left}>
          <div className={styles.main__left_top}>
            <div className={styles.main__left_info}>
              <div className={styles.main__left_info_number}>
                {abbreviate_number(parseInt(countMoney), 0)}
              </div>
              <div className={styles.main__left_info_text}>бюджет организации</div>
            </div>
          </div>
          <div className={styles.main__left_bottom}>
            <h2 className={index.title}>Информация о доходах</h2>
            <div className={styles.main__left_bottom_text}>
              Пополнения за все время: {countDeposit.toLocaleString('ru-RU')} ₽
            </div>
            <div className={styles.main__left_bottom_text}>
              Выводы за все время: {countWithdrawal.toLocaleString('ru-RU')} ₽
            </div>
          </div>
        </div>
        <div className={styles.main__right}>
          <h2 className={index.title}>Прибыль по месяцам</h2>
        </div>
      </div>
      <div className={styles.fields}>
        <h2 className={index.title}>Действия со средствами</h2>
        <div className={styles.fields__inputs}>
          <input
            ref={moneyRef}
            onInput={(e) => handleChange('money', e.target.value)}
            type="text"
            placeholder="Введите сумму (в рублях)"
          />
          <input
            ref={textRef}
            onInput={(e) => handleChange('text', e.target.value)}
            type="text"
            placeholder="Введите комментарий"
          />
          <div className={styles.fields__inputs_buttons}>
            <button onClick={onClickAdd} className={styles.fields__inputs_buttonDeposit}>
              Пополнить
            </button>
            <button onClick={onClickWithdraw} className={styles.fields__inputs_buttonWithdraw}>
              Снять
            </button>
          </div>
        </div>
      </div>
      <WhiteButton onClick={onClickClear} text="Очистить список всех транзакций" />
      <WhiteButton onClick={onClickClearByMonth} text="Очистить транзакции за текущий месяц" />
      <BalanceTable />
    </>
  );
};

export default Balance;
