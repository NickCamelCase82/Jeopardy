import  initState  from '../initState';

export const inputsReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'INPUT_TYPING':
      return { ...state, ...payload }
    case 'INPUT_CLEAR':
      return {payload}
    default:
      return state
  }
}
