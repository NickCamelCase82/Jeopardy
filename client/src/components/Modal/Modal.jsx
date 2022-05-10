import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './Modal.css';
import { useDispatch, useSelector } from 'react-redux';

const Modal = (props) => {
  const dispatch = useDispatch();

  const game1 = useSelector((store) => store.game1); // game1[0].answer
  const game2 = useSelector((store) => store.game2); // game2[0].answer
  const game3 = useSelector((store) => store.game3); // game3[0].answer
  const game4 = useSelector((store) => store.game4); // game4[0].answer
  const game5 = useSelector((store) => store.game5); // game5[0].answer
  const [rigth, setRigth] = useState(false);

  const answer = useSelector((store) => store.inputs.answer);

  const check = () => {
    if (props.category == 1) {
      if (answer === game1[props.numberQ].answer) {
        setRigth(true);
      } 
    } else if (props.category == 2) {
      if (answer === game2[props.numberQ].answer) {
        setRigth(true);
      } 
    } else if (props.category == 3) {
      if (answer === game3[props.numberQ].answer) {
        setRigth(true);
      } 
    } else if (props.category == 4) {
      if (answer === game4[props.numberQ].answer) {
        setRigth(true);
      } 
    } else if (props.category == 5) {
      if (answer === game5[props.numberQ].answer) {
        setRigth(true);
      } 
    }

    dispatch({
      type: 'INPUT_CLEAR',
      payload: {},
    });
  };

  // if (!props.isOpened) {
  //   dispatch({
  //     type: 'INPUT_CLEAR',
  //     payload: {},
  //   });
  // }

  console.log(props.isOpened);

  return (
    <div
      className={`modal-wrapper ${props.isOpened ? 'open' : 'close'}`}
      style={{ ...props.style }}
    >
      <div className="modal-body">
        <div className="modal-close" onClick={props.onModalClose}>
          ✕
        </div>
        <h2>{props.question}</h2>
        <div className="modal-answer">
          <Input
            onChange={(event) =>
              dispatch({
                type: 'INPUT_TYPING',
                payload: { answer: event.target.value },
              })
            }
            type="text"
            placeholder="Ваш ответ"
          />
          <button onClick={check} />
          <div>{rigth && <p>Ответ правильный</p>}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
