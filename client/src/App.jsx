import { React } from 'react';
import Game from './components/game/Game/Game';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <>
      <Registration />
      <Login />
      <Game />
    </>
  );
}

export default App;
