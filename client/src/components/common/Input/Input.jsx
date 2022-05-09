import { React } from "react";
import PropTypes from "prop-types";

const Input = ({ name }) => {
  return (
    <>
      <label for={name} />
      <input id={name} />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
