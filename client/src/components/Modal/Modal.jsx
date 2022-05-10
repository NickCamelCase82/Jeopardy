import React, { useState } from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './Modal.css';
import { useDispatch, useSelector } from 'react-redux';

const Modal = (props) => {
  const dispatch = useDispatch();

  const game1 = useSelector((store) => store.game1);
  const game2 = useSelector((store) => store.game2);
  const game3 = useSelector((store) => store.game3);
  const game4 = useSelector((store) => store.game4);
  const game5 = useSelector((store) => store.game5); 

  const [right, setRight] = useState('');

  const answer = useSelector((store) => store.inputs.answer);

  const check = () => {

    let score = 0;
    switch (props.numberQ) {
      case 0:
        score = 200
        break;
      case 1:
          score = 400
          break;
      case 2:
        score = 600
        break;
      case 3:
        score = 800
        break;
      default:
        break;
    }
    if (props.category == 1) {
      if (answer === game1[props.numberQ].answer) {
        setRight('Правильно');
        dispatch({ type: 'SET_ANSWER', payload: score})
      } else {
        setRight('Неверно');
        dispatch({ type: 'WRONG_ANSWER', payload: score})
      }
    } else if (props.category == 2) {
      if (answer === game2[props.numberQ].answer) {
        setRight('Правильно');
        dispatch({ type: 'SET_ANSWER', payload: score})
      } else {
        setRight('Неверно');
        dispatch({ type: 'WRONG_ANSWER', payload: score})
      }
    } else if (props.category == 3) {
      if (answer === game3[props.numberQ].answer) {
        setRight('Правильно');
        dispatch({ type: 'SET_ANSWER', payload: score})
      } else {
        setRight('Неверно');
        dispatch({ type: 'WRONG_ANSWER', payload: score})
      }
    } else if (props.category == 4) {
      if (answer === game4[props.numberQ].answer) {
        setRight('Правильно');
        dispatch({ type: 'SET_ANSWER', payload: score})
      } else {
        setRight('Неверно');
        dispatch({ type: 'WRONG_ANSWER', payload: score})
      }
    } else if (props.category == 5) {
      if (answer === game5[props.numberQ].answer) {
        setRight('Правильно');
        dispatch({ type: 'SET_ANSWER', payload: score})
      } else {
        setRight('Неверно');
        dispatch({ type: 'WRONG_ANSWER', payload: score})
      }
    }

    dispatch({
      type: 'INPUT_CLEAR',
      payload: {},
    });
  };

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
          <div>{right && <p>{right}</p>}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
