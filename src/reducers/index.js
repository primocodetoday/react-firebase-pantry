import { initialStore } from '../store/initialStore';

const initialState = [...initialStore];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        ...state.filter((item) => item.list.id === action.payload.id),
      };
    default:
      return state;
  }
};

export default rootReducer;
