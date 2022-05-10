import React from 'react';
import Input from '../common/Input/Input';
import './Modal.css';

const Modal = (props) => {
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
          <Input type="text" placeholder="Ваш ответ" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
