import initState from "../initState";

export const gameReducer3 = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_GAME3':
      return {...payload}
    default:
      return state
  }
}
