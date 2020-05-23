/* eslint-disable no-console */
const InitialState = {
  authReducer: null,
};

const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'login failed',
      };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case 'SIGNOUT_SUCCESS':
      console.log('logout success');
      return state;
    default:
      return state;
  }
};

export default authReducer;
