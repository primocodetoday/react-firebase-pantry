import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import authReducer from './authReducer';
import pantryReducer from './pantryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  pantry: pantryReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
