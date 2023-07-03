import React from 'react';

import index from '../../scss/index.module.scss';

const AddButton = ({ size, fontSize, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={index.add}
      style={{ width: `${size}`, height: `${size}`, fontSize: `${fontSize}` }}>
      +
    </button>
  );
};

export default AddButton;
