import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { inputsReducer } from './inputsReducer';
import { userReducer } from './userReducer';
import { gameReducer } from './gameReducer';
import {gameReducer2} from './gameReducer2';
import {gameReducer3} from './gameReducer3';
import {gameReducer4} from './gameReducer4';
import {gameReducer5} from './gameReducer5';
import {resultReducer} from './resultReducer';

const rootReducer = combineReducers({
  inputs: inputsReducer,
  error: errorReducer,
  user: userReducer,
  game1: gameReducer,
  game2: gameReducer2,
  game3: gameReducer3,
  game4: gameReducer4,
  game5: gameReducer5,
  result: resultReducer,
});
export default rootReducer;
