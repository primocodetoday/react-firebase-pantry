import { initialStore } from '../store/initialStore';

const initialState = [...initialStore];

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload.item];
    case 'REMOVE_ITEM':
      return [...state.filter((item) => item.id !== action.payload.id)];
    case 'CHANGE_SETTINGS': {
      return state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            maxStock: action.payload.maxStock,
            minStock: action.payload.minStock,
            unit: action.payload.unit,
          };
        return item;
      });
    }
    case 'ADD_STOCK': {
      return state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            stock: item.stock + 1,
          };
        return item;
      });
    }
    case 'SUB_STOCK': {
      return state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            stock: item.stock - 1,
          };
        return item;
      });
    }

    default:
      return state;
  }
};

export default rootReducer;
