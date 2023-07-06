import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { selectBalance } from '../../redux/slices/balanceSlice';
import { useSelector } from 'react-redux';
import styles from '../../scss/balance.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true,
      ticks: {
        color: '#7c7c7c',
        font: {
          size: 16,
        },
        maxRotation: 90,
        minRotation: 45,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: '#7c7c7c',
        font: {
          size: 14,
        },
      },
    },
  },
  fontSize: 15,
};

const BarChart = () => {
  // const selectJune = useSelector(selectBalanceDepositByMonth('07'));
  // console.log(selectJune);
  // const selectJuneSum = selectJune.map((june) => june.sum);
  // let sum = selectJuneSum.reduce(function (currentSum, currentJuneSum) {
  //   return currentSum + +currentJuneSum;
  // }, 0);

  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthNames = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const months = useSelector(selectBalance);
  console.log(months.map((month) => month));

  const maxd = months.indexOf(Math.max(...months));
  const mind = months.indexOf(Math.min(...months));

  const data = {
    labels,

    datasets: [
      {
        data: months.map((month) => month),
        backgroundColor: '#BFEE61',
        barThickness: 30,
        borderSkipped: false,
        borderRadius: 100,
      },
      {
        label: 'Доходы',
        data: labels.map(() => faker.datatype.number({ min: 3000000, max: 3000000 })),
        backgroundColor: '#333333',
        barThickness: 30,
        borderSkipped: false,
        borderRadius: 100,
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
      <br></br> <br></br>
      <div className={styles.main__left_bottom_text}>
        Самый прибыльный месяц: {monthNames[maxd]} ({months[maxd].toLocaleString('ru-RU')} ₽){' '}
        <br></br> <br></br> Самый неприбыльный месяц: {monthNames[mind]} (
        {months[mind].toLocaleString('ru-RU')} ₽)
      </div>
    </>
  );
};

export default BarChart;
