import React, { useState } from 'react';
import './Game.css';
import Category from '../Сategory/Сategory';
import Score from '../Score/Score';
import Modal from '../../Modal/Modal';

const Game = () => {
  const [modal, setModal] = useState(false);

  const gameNameOne = 'title-one';
  const gameNameTwo = 'title-two';
  const gameNameThree = 'title-three';
  const gameNameFour = 'title-four';
  const gameNameFive = 'title-five';
  return (
    <div className="game">
      <div className="game-item">
        <Category title={gameNameOne} />
        {['200', '400', '600', '800'].map((score, index) => (
          <div onClick={() => setModal(true)}>
            <Score score={score} key={index + 1} />
          </div>
        ))}
      </div>
      <div className="game-item">
        <Category title={gameNameTwo} />
        {['200', '400', '600', '800'].map((score, index) => (
          <div onClick={() => setModal(true)}>
            <Score score={score} key={index + 1} />
          </div>
        ))}
      </div>
      <div className="game-item">
        <Category title={gameNameThree} />
        {['200', '400', '600', '800'].map((score, index) => (
          <div onClick={() => setModal(true)}>
            <Score score={score} key={index + 1} />
          </div>
        ))}
      </div>
      <div className="game-item">
        <Category title={gameNameFour} />
        {['200', '400', '600', '800'].map((score, index) => (
          <div onClick={() => setModal(true)}>
            <Score score={score} key={index + 1} />
          </div>
        ))}
      </div>
      <div className="game-item">
        <Category title={gameNameFive} />
        {['200', '400', '600', '800'].map((score, index) => (
          <div onClick={() => setModal(true)}>
            <Score score={score} key={index + 1} />
          </div>
        ))}
      </div>
      <Modal
        question="Тут будет вопрос?"
        isOpened={modal}
        onModalClose={() => setModal(false)}
      />
    </div>
  );
};

export default Game;
