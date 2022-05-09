import initState from '../initState';

export const userReducer = ( state = initState, action ) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_LOGIN':
      return {...payload}
   
    case 'USER_LOGOUT':
      return {...payload}
    default:
      return state
  }
}
