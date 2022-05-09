import { React } from "react";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="register">
      <form>
        <div>Регистрация</div>
        <Input name="login" placeholder="Введите логин" />
        <Input name="email" placeholder="Введите емаил" />
        <Input name="password" placeholder="Введите пароль" />
        <Button />
      </form>
    </div>
  );
};

export default Registration;
