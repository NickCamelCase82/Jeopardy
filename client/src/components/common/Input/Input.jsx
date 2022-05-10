import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <>
      <input className="field" {...props} />
    </>
  );
};

export default Input;
