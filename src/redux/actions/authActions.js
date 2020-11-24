export const AUTH_ACTIONS_TYPES = {
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  SIGNOUT_SUCCESS: 'SIGNOUT_SUCCESS',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERROR: 'SIGNUP_ERROR',
};

export const signIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: AUTH_ACTIONS_TYPES.LOGIN_SUCCESS });
      })
      .catch((err) => {
        dispatch({ type: AUTH_ACTIONS_TYPES.LOGIN_ERROR, err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: AUTH_ACTIONS_TYPES.SIGNOUT_SUCCESS });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore.collection('users').doc(resp.user.uid).set({
          firstName: newUser.firstName,
        });
      })
      .then(() => {
        dispatch({ type: AUTH_ACTIONS_TYPES.SIGNUP_SUCCESS });
      })
      .catch((err) => dispatch({ type: AUTH_ACTIONS_TYPES.SIGNUP_ERROR, err }));
  };
};
