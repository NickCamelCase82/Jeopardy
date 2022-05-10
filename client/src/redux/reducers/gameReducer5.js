import initState from "../initState";

export const gameReducer5 = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_GAME5':
      return {...payload}
    default:
      return state
  }
}
