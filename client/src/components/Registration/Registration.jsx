import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './Registration.css';

const Registration = () => {
  return (
    <div className="register">
      <form>
        <h2>Регистрация</h2>
        <Input name="login" placeholder="Введите логин" type="text" />
        <Input name="email" placeholder="Введите емаил" type="email" />
        <Input name="password" placeholder="Введите пароль" type="password" />
        <Button />
      </form>
    </div>
  );
};

export default Registration;
