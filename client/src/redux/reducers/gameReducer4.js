import initState from "../initState";

export const gameReducer4 = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_GAME4':
      return {...payload}
    default:
      return state
  }
}
