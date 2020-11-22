/* eslint-disable no-console */
import { initialStore } from '../../store/initialStore';

const pantryReducer = (state = initialStore, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('Add_Item success');
      return [...state, action.payload.item];
    case 'ADD_ITEM_ERROR':
      console.log('Add_Item error');
      return state;
    case 'REMOVE_ITEM':
      console.log('Remove_Item success');
      return [...state.filter((item) => item.id !== action.payload.id)];
    case 'REMOVE_ITEM_ERROR':
      console.log('Remove_Item error');
      return state;
    case 'CHANGE_ITEM': {
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
    case 'CHANGE_ITEM_ERROR': {
      console.log('Change_Item error');
      return state;
    }
    case 'ADD_STOCK': {
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
    case 'ADD_STOCK_ERROR': {
      console.log('Add_Stock error');
      return state;
    }
    case 'SUB_STOCK': {
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
    case 'SUB_STOCK_ERROR': {
      console.log('Sub_Stock error');
      return state;
    }

    default:
      return state;
  }
};

export default pantryReducer;
