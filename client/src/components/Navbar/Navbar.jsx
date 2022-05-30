import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './Navbar.css';

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
    <div className="navbarMenu">
      <div className="nav">
        {user.id ? (
          <>
            <Link className="btn btn-outline-primary" to="/game">
              Играть
            </Link>
            <Link
              className="btn btn-outline-primary"
              to="/"
              onClick={getlogout}
            >
              Выйти
            </Link>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-primary" to="/game">
              Играть
            </Link>
            <Link className="btn btn-outline-primary" to="/login">
              Войти
            </Link>
            <Link
              className="regButton btn btn-outline-primary"
              to="/registration"
            >
              Регистрация
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
