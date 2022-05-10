import  initState  from '../initState';

export const resultReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_ANSWER':
      return state + payload
    case 'WRONG_ANSWER':
      return state - payload
    default:
      return state
  }
}
