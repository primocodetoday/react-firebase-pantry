/* eslint-disable no-console */
import { PANTRY_ACTION_TYPES } from 'redux/actions/pantryActions';

export const initialStore = { pantry: [] };

const pantryReducer = (state = initialStore, action) => {
  switch (action.type) {
    case PANTRY_ACTION_TYPES.ADD_ITEM:
      console.log('Add_Item success');
      return [...state, action.payload.item];
    case PANTRY_ACTION_TYPES.ADD_ITEM_ERROR:
      console.log('Add_Item error');
      return state;
    case PANTRY_ACTION_TYPES.REMOVE_ITEM:
      console.log('Remove_Item success');
      return [...state.filter((item) => item.id !== action.payload.id)];
    case PANTRY_ACTION_TYPES.REMOVE_ITEM_ERROR:
      console.log('Remove_Item error');
      return state;
    case PANTRY_ACTION_TYPES.CHANGE_ITEM: {
      console.log('Change_Item success');
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
    case PANTRY_ACTION_TYPES.CHANGE_ITEM_ERROR: {
      console.log('Change_Item error');
      return state;
    }
    case PANTRY_ACTION_TYPES.ADD_STOCK: {
      console.log('Add_Stock success');
      return state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            stock: item.stock + 1,
          };
        return item;
      });
    }
    case PANTRY_ACTION_TYPES.ADD_STOCK_ERROR: {
      console.log('Add_Stock error');
      return state;
    }
    case PANTRY_ACTION_TYPES.SUB_STOCK: {
      console.log('Sub_Stock success');
      return state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            stock: item.stock - 1,
          };
        return item;
      });
    }
    case PANTRY_ACTION_TYPES.SUB_STOCK_ERROR: {
      console.log('Sub_Stock error');
      return state;
    }

    default:
      return state;
  }
};

export default pantryReducer;
