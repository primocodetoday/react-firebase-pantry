import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance,
} from 'redux-firestore';
import { getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
import rootReducer from '../reducers/rootReducer';
import fbConfig from '../config/fbConfig';
import { initialStore } from './initialStore';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  rootReducer,
  initialStore,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(fbConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);
/* eslint-enable */

export const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

export default store;
