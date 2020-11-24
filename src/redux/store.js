import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import fbConfig from '../services/fbConfig';
import { initialStore } from './reducers/pantryReducer';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  rootReducer,
  initialStore,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig),
  ),
);
/* eslint-enable */

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
