import React, { useState, useEffect } from 'react';
import './Game.css';
import Category from '../Сategory/Сategory';
import Score from '../Score/Score';
// import Modal from '../../Modal/Modal';

const Game = () => {
  // const [modal, setModal] = useState(false);
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [title4, setTitle4] = useState('');
  const [title5, setTitle5] = useState('');
  const [question1, setQuestion1] = useState([]);

  useEffect(() => {
    (async () => {
      const game1 = await fetch('http://localhost:3001/game1');
      const resultGame1 = await game1.json();
      setTitle1(resultGame1[0].category);
      setQuestion1(resultGame1);
      console.log(resultGame1);

      const game2 = await fetch('http://localhost:3001/game2');
      const resultGame2 = await game2.json();
      setTitle2(resultGame2[0].category);

      const game3 = await fetch('http://localhost:3001/game3');
      const resultGame3 = await game3.json();
      setTitle3(resultGame3[0].category);

      const game4 = await fetch('http://localhost:3001/game4');
      const resultGame4 = await game4.json();
      setTitle4(resultGame4[0].category);

      const game5 = await fetch('http://localhost:3001/game5');
      const resultGame5 = await game5.json();
      setTitle5(resultGame5[0].category);
    })();
  }, []);

  // const game1 = await fetch('http://localhost:3001/game1');
  // const resultGame1 = await game1.json();
  // const title1 = resultGame1[0].category;
  // console.log('title1-------------', title1);
  // console.log('game---------------', resultGame1);

  // const game2 = fetch('http://localhost:3001/game2')
  //   .then((data) => data.json())
  //   .then((data) => console.log(data));

  return (
    <div className="game">
      <div className="game-item">
        <Category title={title1} />
        {['200', '400', '600', '800'].map((score, index) => (
          <Score score={score} question={question1} key={index + 1} />
        ))}
      </div>
      <div className="game-item">
        <Category title={title2} />
        {['200', '400', '600', '800'].map((score, index) => (
          <Score score={score} key={index + 1} />
        ))}
      </div>
      <div className="game-item">
        <Category title={title3} />
        {['200', '400', '600', '800'].map((score, index) => (
          <Score score={score} key={index + 1} />
        ))}
      </div>
      <div className="game-item">
        <Category title={title4} />
        {['200', '400', '600', '800'].map((score, index) => (
          <Score score={score} key={index + 1} />
        ))}
      </div>
      <div className="game-item">
        <Category title={title5} />
        {['200', '400', '600', '800'].map((score, index) => (
          <Score score={score} key={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default Game;
