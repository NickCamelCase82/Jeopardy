import { React } from "react";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <form>
        <div>Авторизация</div>
        <Input name="login" placeholder="Введите логин" />
        <Input name="password" placeholder="Введите пароль" />
        <Button />
      </form>
    </div>
  );
};

export default Login;
