import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import './Login.css';


const Login = ({ getLogin }) => {

  const input = useSelector(store => store.inputs);
  const dispatch = useDispatch();

  return (
    <div className="login">
      <form>
        <div>Авторизация</div>
        <Input 
        name="login" 
        placeholder="Введите логин" 
        onChange={(event) => dispatch({ type: 'INPUT_TYPING', payload: { [event.target.name]: event.target.value } })} 
        value={input.login?? ''}/>

        <Input 
        type="password" 
        name="password" 
        placeholder="Введите пароль" 
        onChange={(event) => dispatch({ type: 'INPUT_TYPING', payload: { [event.target.name]: event.target.value } })} 
        value={input.password?? ''}/>

        <Button onClick={getLogin}/>
      </form>
    </div>
  );
};

export default Login;
