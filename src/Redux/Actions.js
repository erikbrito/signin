import actionsTypes from './Constants';

const actions = {
  register: (register) => ({
    type: actionsTypes.REGISTER,
    register
  }),
  login: (login) => ({
    type: actionsTypes.LOGIN,
    login
  }),
  screenSignin: () => ({
    type: actionsTypes.SCREENSIGNIN
  }),
  screenRegister: () => ({
    type: actionsTypes.SCREENREGISTER
  })
}

export default actions