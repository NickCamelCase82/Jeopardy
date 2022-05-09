import { React } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ name, placeholder, type }) => {
  return (
    <>
      <label htmlFor={name} />
      <input
        className="field"
        id={name}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Input;
