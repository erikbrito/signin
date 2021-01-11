import actionsTypes from './Constants';

const INITIAL_STATE = {
  register: [],
  screen: false,
  auth: false
}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.SCREENREGISTER:
      return { ...state, screen: true };
    case actionsTypes.SCREENSIGNIN:
      return { ...state, screen: false };
    case actionsTypes.REGISTER:
      return {register: [...state.register, action.register]}
    case actionsTypes.LOGIN:
      const find = state.register.findIndex(obj => obj.email === action.login.email)
        if (find >= 0) {
          return { auth: true, screen: false, register: [...state.register]}
        } else {
          return { auth: false, screen: false, register: [...state.register]}
        }
    default:
      return state
  }
}

export default homeReducer