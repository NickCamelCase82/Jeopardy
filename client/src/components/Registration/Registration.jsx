import React from 'react';
import Input from '../common/Input/Input';
import Button from '../common/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import './Registration.css';

const Registration = ({ getReg }) => {
  const input = useSelector((store) => store.inputs);
  const dispatch = useDispatch();

  return (
    <div className="register">
      <form>
        <div>Регистрация</div>

        <Input
          type="text"
          name="login"
          placeholder="Введите логин"
          onChange={(event) =>
            dispatch({
              type: 'INPUT_TYPING',
              payload: { [event.target.name]: event.target.value },
            })
          }
          value={input.login ?? ''}
        />

        <Input
          type="email"
          name="email"
          placeholder="Введите емаил"
          onChange={(event) =>
            dispatch({
              type: 'INPUT_TYPING',
              payload: { [event.target.name]: event.target.value },
            })
          }
          value={input.email ?? ''}
        />

        <Input
          type="password"
          name="password"
          placeholder="Введите пароль"
          onChange={(event) =>
            dispatch({
              type: 'INPUT_TYPING',
              payload: { [event.target.name]: event.target.value },
            })
          }
        />

        <Button onClick={getReg} />
      </form>
    </div>
  );
};

export default Registration;
