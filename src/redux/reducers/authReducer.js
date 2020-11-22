/* eslint-disable no-console */
import { AUTH_ACTIONS } from 'redux/actions/authActions';

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
    case AUTH_ACTIONS.LOGIN_SUCCESS:
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case AUTH_ACTIONS.SIGNOUT_SUCCESS:
      console.log('logout success');
      return state;
    case AUTH_ACTIONS.SIGNUP_SUCCESS:
      console.log('signup success');
      return { ...state, authError: null };
    case AUTH_ACTIONS.SIGNUP_ERROR:
      console.log('signup error');
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
