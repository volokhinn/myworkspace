import React from 'react';

import styles from '../../scss/components/_staffCategories.module.scss';

const StaffCategories = (/* { value, onChangeCategory } */) => {
  const categories = ['All', 'SMM', 'WEB', 'CONTEXT', 'DESIGN', 'TARGET'];

  return (
    <ul className={styles.category__list}>
      {categories.map((categoryName, i) => (
        <li
          className={styles.category__item}
          key={
            i
          } /* onClick={() => onChangeCategory(i)} className={value === i ? {styles.active} : ''} */
        >
          {categoryName}
        </li>
      ))}
    </ul>
  );
};

export default StaffCategories;
