import React from 'react';

import index from '../../scss/index.module.scss';
import { useState } from 'react';

const Button = ({ icon, children }) => {
  const [click, setClick] = useState(0);
  return (
    <div className={index.button} onClick={() => setClick(1)} click={click}>
      <img src={icon} alt={icon} />
      {children}
    </div>
  );
};

export default Button;
