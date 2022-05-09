import React from 'react';
import PropTypes from 'prop-types';
import './Category.css';

const Category = ({ title }) => {
  return <div className="category-name">{title}</div>;
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Category;
