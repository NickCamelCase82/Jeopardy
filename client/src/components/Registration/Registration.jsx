import { React } from "react";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import "./Registration.css";

const Registration = ({getReg, input, handleInputs}) => {
  return (
    <div className="register">
      <form>
        <div>Регистрация</div>
        <input name="login" placeholder="Введите логин" onChange={handleInputs} value={input.login?? ''}/>
        <input name="email" placeholder="Введите емаил" onChange={handleInputs} value={input.email?? ''}/>
        <input type="password" name="password" placeholder="Введите пароль" onChange={handleInputs} value={input.password?? ''}/>
        <button onClick={getReg}/>
      </form>
    </div>
  );
};

export default Registration;
