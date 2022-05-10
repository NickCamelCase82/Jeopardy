import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Score.css';
import Modal from '../../Modal/Modal';

const Score = ({ score /* question */ }) => {
  const [modal, setModal] = useState(false);
  // console.log(question);

  // let quest;

  // switch (score) {
  //   case '200':
  //     quest = question[0].question;
  //     break;

  //   case '400':
  //     quest = question[1].question;
  //     break;

  //   case '600':
  //     quest = question[2].question;
  //     break;

  //   case '800':
  //     quest = question[3].question;
  //     break;

  //   default:
  //     break;
  // }

  return (
    <>
      <div onClick={() => setModal(true)} className="score">
        {score}
      </div>
      <Modal
        // question={quest}
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
