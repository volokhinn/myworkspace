import React from 'react';
import index from '../../scss/index.module.scss';

const WhiteButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={index.white__button}>
      {text}
    </button>
  );
};

export default WhiteButton;
