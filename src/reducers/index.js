import { initialStore } from '../store/initialStore';

const initialState = [...initialStore];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload.item];
    case 'REMOVE_ITEM':
      return [...state.filter((item) => item.id !== action.payload.id)];
    default:
      return state;
  }
};

export default rootReducer;
