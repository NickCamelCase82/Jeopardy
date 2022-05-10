import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './Registration.css';

const Registration = ({ getReg, input, handleInputs }) => {
  return (
    <div className="register">
      <form>
        <div>Регистрация</div>
        <Input type="text" name="login" placeholder="Введите логин" />
        <Input type="email" name="email" placeholder="Введите емаил" />
        <Input type="password" name="password" placeholder="Введите пароль" />
        <Button />
      </form>
    </div>
  );
};

export default Registration;
