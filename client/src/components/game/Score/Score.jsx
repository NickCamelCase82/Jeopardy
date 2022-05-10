import React from 'react';
import PropTypes from 'prop-types';
import './Score.css';

const Score = ({ score }) => {
  return <div className="score">{score}</div>;
};

Score.propTypes = {
  score: PropTypes.string.isRequired,
};

export default Score;
