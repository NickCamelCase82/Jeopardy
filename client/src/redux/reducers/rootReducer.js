import { combineReducers } from 'redux';
import { errorReducer } from './errorReducer';
import { inputsReducer } from './inputsReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  inputs: inputsReducer,
  error: errorReducer,
  user: userReducer,
});
export default rootReducer;
