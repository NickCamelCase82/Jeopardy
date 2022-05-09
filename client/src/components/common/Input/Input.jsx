import { React } from "react";
import PropTypes from "prop-types";

const Input = ({ name, placeholder }) => {
  return (
    <>
      <label htmlFor={name} />
      <input id={name} placeholder={placeholder} />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
