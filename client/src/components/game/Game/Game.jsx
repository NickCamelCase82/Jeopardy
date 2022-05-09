import React from 'react';
import './Game.css';
import Category from '../Сategory/Сategory';
import Score from '../Score/Score';

const Game = () => {
  const gameNameOne = 'title-one';
  const gameNameTwo = 'title-two';
  const gameNameThree = 'title-three';
  const gameNameFour = 'title-four';
  const gameNameFive = 'title-five';
  return (
    <div className="game">
      <div className="game-item">
        <Category title={gameNameOne} />
        {['200', '400', '600', '800', '1000'].map((score, index) => (
          <Score score={score} key={index + 1} />
        ))}
      </div>
      <div className="game-item">
        <Category title={gameNameTwo} />
        {['200', '400', '600', '800', '1000'].map((score, index) => (
          <Score score={score} key={index + 1} />
        ))}
      </div>
      <div className="game-item">
        <Category title={gameNameThree} />
        {['200', '400', '600', '800', '1000'].map((score, index) => (
          <Score score={score} key={index + 1} />
        ))}
      </div>
      <div className="game-item">
        <Category title={gameNameFour} />
        {['200', '400', '600', '800', '1000'].map((score, index) => (
          <Score score={score} key={index + 1} />
        ))}
      </div>
      <div className="game-item">
        <Category title={gameNameFive} />
        {['200', '400', '600', '800', '1000'].map((score, index) => (
          <Score score={score} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Game;
