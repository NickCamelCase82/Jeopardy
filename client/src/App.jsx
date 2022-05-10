import React from 'react';
import Game from './components/game/Game/Game';
import { Routes, Route } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageRegistration from './pages/PageRegistration';
import Main from './components/Main/Main';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();
  console.log('App');
  useEffect(() => {
    fetch('http://localhost:3001/session', {
      credentials: 'include',
    })
      .then((data) => data.json())
      .then((user) => dispatch({ type: 'USER_LOGIN', payload: user }));
  }, [dispatch]);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/registration" element={<PageRegistration />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
