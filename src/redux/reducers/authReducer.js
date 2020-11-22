/* eslint-disable no-console */
export const AUTH_ACTIONS = {
  LOGIN_ERROR: 'LOGIN_ERROR',
};

const InitialState = {
  authReducer: null,
};

const authReducer = (state = InitialState, action) => {
  switch (action.type) {
    case AUTH_ACTIONS.LOGIN_ERROR:
      console.log('login error');
      return {
        ...state,
        authError: action.err.message,
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
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return { ...state, authError: null };
    case 'SIGNUP_ERROR':
      console.log('signup error');
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
