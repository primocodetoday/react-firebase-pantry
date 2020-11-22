import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';
import pantryReducer from './pantryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  pantry: pantryReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
