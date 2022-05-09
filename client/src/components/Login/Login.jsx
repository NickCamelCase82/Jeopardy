import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <form>
        <h2>Авторизация</h2>
        <Input name="login" placeholder="Введите логин" type="text" />
        <Input name="password" placeholder="Введите пароль" type="password" />
        <Button />
      </form>
    </div>
  );
};

export default Login;
