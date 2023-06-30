import React from 'react';

import styles from '../../scss/components/_staffCategories.module.scss';

import { clearFilter, filterStaffsByCategory } from '../../redux/slices/staffSlice';
import { useDispatch } from 'react-redux';

const StaffCategories = () => {
  const categories = ['All', 'SMM', 'WebDev', 'Context', 'Design', 'Target'];

  const [value, setValue] = React.useState('All');

  const dispatch = useDispatch();

  const onClickCategory = (category) => {
    setValue(category);
    dispatch(clearFilter());
    if (category !== 'All') dispatch(filterStaffsByCategory(category));
  };

  return (
    <ul className={styles.category__list}>
      {categories.map((categoryName) => (
        <li
          onClick={() => onClickCategory(categoryName)}
          className={
            value === categoryName
              ? `${styles.active} ${styles.category__item}`
              : styles.category__item
          }
          key={categoryName}>
          {categoryName}
        </li>
      ))}
    </ul>
  );
};

export default StaffCategories;
