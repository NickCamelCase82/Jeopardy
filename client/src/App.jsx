import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLogin from './pages/pageLogin';
import PageRegistration from './pages/pageRegistration';
import Main from './components/Main/Main';
import Game from './components/game/Game/Game';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar';

function App() {
  const dispatch = useDispatch();

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
