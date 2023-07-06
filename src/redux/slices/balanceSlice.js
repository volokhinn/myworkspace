import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  money: [],
};

export const balanceSlice = createSlice({
  name: 'money',
  initialState,
  reducers: {
    addMoney(state, action) {
      state.money.unshift({
        id: new Date().getTime(),
        type: action.payload.type,
        sum: action.payload.money,
        text: action.payload.text,
        date: new Date().toLocaleDateString('ru-RU'),
      });
      localStorage.setItem('money', JSON.stringify(state.money) ?? '[]');
    },

    deleteMoney(state, action) {
      state.money.unshift({
        id: new Date().getTime(),
        type: action.payload.type,
        sum: action.payload.money,
        text: action.payload.text,
        date: new Date().toLocaleDateString('ru-RU'),
      });
      localStorage.setItem('money', JSON.stringify(state.money) ?? '[]');
    },

    fetchMoney(state) {
      state.money = JSON.parse(localStorage.getItem('money') ?? '[]');
    },

    clearMoneyByMonth(state) {
      state.money = state.money.filter((item) => {
        const newDate = item.date.slice(3, -5);
        return newDate !== new Date().toLocaleDateString('ru-RU').slice(3, -5);
      });

      localStorage.setItem('money', JSON.stringify(state.money) ?? '[]');
    },

    clearMoney(state) {
      localStorage.removeItem('money', JSON.stringify(state.money) ?? '[]');
    },
  },
});

export const selectBalanceData = (state) => state.balanceSlice;

export const selectBalanceDeposit = (state) =>
  state.balanceSlice.money.filter((balance) => balance.type === 'пополнение');

export const selectBalance = (state) => {
  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const balances = [];
  for (const month of months) {
    const balanceDeposit = state.balanceSlice.money
      .filter((item) => item.type === 'пополнение' && item.date.slice(3, -5) === month)
      .reduce((acc, item) => acc + +item.sum, 0);
    const balanceWithdraw = state.balanceSlice.money
      .filter((item) => item.type === 'вывод' && item.date.slice(3, -5) === month)
      .reduce((acc, item) => acc + +item.sum, 0);
    balances.push(balanceDeposit - balanceWithdraw);
  }
  return balances;
};

export const selectBalanceWithdrawal = (state) =>
  state.balanceSlice.money.filter((balance) => balance.type === 'вывод');

export const { addMoney, deleteMoney, countAllMoney, fetchMoney, clearMoney, clearMoneyByMonth } =
  balanceSlice.actions;

export default balanceSlice.reducer;
