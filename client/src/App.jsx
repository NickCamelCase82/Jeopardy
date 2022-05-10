import React from 'react';
import Game from './components/game/Game/Game';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import { Routes, Route } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageRegistration from './pages/PageRegistration';
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
        <Route path="/login" element={<PageLogin />} />
        <Route path="/registration" element={<PageRegistration />} />
      </Routes>
    </div>
  );
}

export default App;
