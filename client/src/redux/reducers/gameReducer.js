import initState from "../initState";

export const gameReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_GAME':
      return {...payload}
    default:
      return state
  }
}
