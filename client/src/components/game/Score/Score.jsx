import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './Score.css';
import Modal from '../../Modal/Modal';

const Score = ({ score, category }) => {
  const [modal, setModal] = useState(false);
  const game1 = useSelector((store) => store.game1);
  const game2 = useSelector((store) => store.game2);
  const game3 = useSelector((store) => store.game3);
  const game4 = useSelector((store) => store.game4);
  const game5 = useSelector((store) => store.game5);

  let question;
  let game;
  let numberQ;

  switch (category) {
    case '1':
      game = game1;
      break;

    case '2':
      game = game2;
      break;

    case '3':
      game = game3;
      break;

    case '4':
      game = game4;
      break;

    case '5':
      game = game5;
      break;

    default:
      break;
  }

  switch (score) {
    case '200':
      question = game[0].question;
      numberQ = 0;
      break;
    case '400':
      question = game[1].question;
      numberQ = 1;
      break;

    case '600':
      question = game[2].question;
      numberQ = 2;
      break;

    case '800':
      question = game[3].question;
      numberQ = 3;
      break;

    default:
      break;
  }

  return (
    <>
      <div onClick={() => setModal(true)} className="score">
        {score}
      </div>
      <Modal
        question={question}
        category={category}
        numberQ={numberQ}
        isOpened={modal}
        onModalClose={() => setModal(false)}
      />
    </>
  );
};

Score.propTypes = {
  score: PropTypes.string.isRequired,
};

export default Score;
