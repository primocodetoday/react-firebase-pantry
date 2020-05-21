import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pantryReducer from './pantryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  pantry: pantryReducer,
});

export default rootReducer;
