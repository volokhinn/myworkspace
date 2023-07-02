import React from 'react';

import index from '../../scss/index.module.scss';
import { useState } from 'react';

const Button = ({ onClick, icon, children }) => {
  const [click, setClick] = useState(0);
  return (
    <div onClick={onClick}>
      <div className={index.button} onClick={() => setClick(1)} click={click}>
        <img src={icon} alt={icon} />
        {children}
      </div>
    </div>
  );
};

export default Button;
