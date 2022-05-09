import { React } from "react";
import PropTypes from "prop-types";

const Input = ({ name, placeholder, value, type, handleInputs }) => {
  return (
    <>
      <label htmlFor={name} />
      <input id={name} placeholder={placeholder} name={name} value={value} onChange={(e) => handleInputs(e)} type={type ?? 'text'}/>
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
