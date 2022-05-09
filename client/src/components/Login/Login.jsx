import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './Login.css';


const Login = ({ handleInputs, input, getLogin}) => {
  return (
    <div className="login">
      <form>
        <div>Авторизация</div>
        <input name="login" placeholder="Введите логин" onChange={handleInputs} value={input.login?? ''}/>
        <input type="password" name="password" placeholder="Введите пароль" onChange={handleInputs} value={input.password?? ''}/>
        <button onClick={getLogin}/>
      </form>
    </div>
  );
};

export default Login;
