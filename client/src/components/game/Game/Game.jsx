import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Game.css';
import Category from '../Сategory/Сategory';
import Score from '../Score/Score';
// import Modal from '../../Modal/Modal';

const Game = () => {
  const dispatch = useDispatch();
  const game1 = useSelector((store) => store.game1);
  const game2 = useSelector((store) => store.game2);
  const game3 = useSelector((store) => store.game3);
  const game4 = useSelector((store) => store.game4);
  const game5 = useSelector((store) => store.game5);
  const result = useSelector((store) => store.result);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/game1')
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: 'SET_GAME', payload: data });
      });

    fetch('http://localhost:3001/game2')
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: 'SET_GAME2', payload: data });
      });

    fetch('http://localhost:3001/game3')
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: 'SET_GAME3', payload: data });
      });

    fetch('http://localhost:3001/game4')
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: 'SET_GAME4', payload: data });
      });

    fetch('http://localhost:3001/game5')
      .then((data) => data.json())
      .then((data) => {
        dispatch({ type: 'SET_GAME5', payload: data });
        setLoading(false);
      });
  }, []);


  return (
    <div className="game">
      {loading ? (
        'идет загрузка'
      ) : (
        <>
          <h5>Счёт: {result}</h5>
          <div className="game-item">
            <Category title={game1 && game1[0].category} />
            {['200', '400', '600', '800'].map((score, index) => (
              <Score score={score} key={index + 1} category="1" />
            ))}
          </div>
          <div className="game-item">
            <Category title={game2 && game2[0].category} />
            {['200', '400', '600', '800'].map((score, index) => (
              <Score score={score} key={index + 1} category="2" />
            ))}
          </div>
          <div className="game-item">
            <Category title={game3 && game3[0].category} />
            {['200', '400', '600', '800'].map((score, index) => (
              <Score score={score} key={index + 1} category="3" />
            ))}
          </div>
          <div className="game-item">
            <Category title={game4 && game4[0].category} />
            {['200', '400', '600', '800'].map((score, index) => (
              <Score score={score} key={index + 1} category="4" />
            ))}
          </div>
          <div className="game-item">
            <Category title={game5 && game5[0].category} />
            {['200', '400', '600', '800'].map((score, index) => (
              <Score score={score} key={index + 1} category="5" />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
