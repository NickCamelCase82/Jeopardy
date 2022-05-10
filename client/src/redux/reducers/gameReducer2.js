import initState from "../initState";

export const gameReducer2 = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_GAME2':
      return {...payload}
    default:
      return state
  }
}
