import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  async function getlogout() {
    console.log(document.cookie);
    const response = await fetch('http://localhost:3001/logout', {
      credentials: 'include',
    });
    console.log(response);
    dispatch({ type: 'USER_LOGOUT', payload: {} });
  }

  return (
    <div>
      {user.id ? (
        <>
          <Link to="/game">Играть</Link>
          <Link to="/" onClick={getlogout}>
            Выйти
          </Link>
        </>
      ) : (
        <>
          <Link to="/game">Играть</Link>
          <Link to="/login">Войти</Link>
          <Link to="/registration">Регистрация</Link>
        </>
      )}
    </div>
  );
}
