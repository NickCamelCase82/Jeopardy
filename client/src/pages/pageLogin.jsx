import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login/Login';


export default function PageLogin() {
  const input = useSelector(store => store.inputs);
  const error = useSelector(store => store.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInputs (event) {
    dispatch({ type: 'INPUT_TYPING', payload: { [event.target.name]: event.target.value } });
  };

  async function getLogin (event) {
    event.preventDefault()
   
    const resp = await fetch('http://localhost:3001/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(input)
    })

    const resp2 = await resp.json();
    if (resp2.error) {
      dispatch({ type: 'SET_ERROR', payload: {error: resp2.error}});
      dispatch({ type: 'INPUT_CLEAR', payload: {}});
    } else {
      const result = {
        id: resp2
      };
      
      dispatch({ type: 'USER_LOGIN', payload: result});
      dispatch({ type: 'INPUT_CLEAR', payload: {}});
      dispatch({ type: 'SET_ERROR', payload: {}});
      navigate('/');
    }
  };
  return (
    <div>
      <h4>Войти в свой профиль</h4>
      {error.error && <h4 className='error'>{error.error}</h4>}
      <Login handleInputs={handleInputs} input={input} getLogin={getLogin}/>
    </div>
  )
}
