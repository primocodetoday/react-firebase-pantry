export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: { id },
  };
};

export const addItem = (itemContent) => {
  const getId = () => Math.floor(Math.random() * (99999 - 1 + 1)) + 1;
  // eslint-disable-next-line no-unused-vars
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('pantry')
      .add({ ...itemContent })
      .then(() => {
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            item: {
              id: getId(),
              ...itemContent,
            },
          },
        });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_ITEM_ERROR', err });
      });
  };
};

export const changeItemSettings = (id, maxStock, minStock, unit) => {
  return {
    type: 'CHANGE_SETTINGS',
    payload: {
      id,
      maxStock,
      minStock,
      unit,
    },
  };
};

export const addStockAction = (id) => {
  return {
    type: 'ADD_STOCK',
    payload: { id },
  };
};
export const subStockAction = (id) => {
  return {
    type: 'SUB_STOCK',
    payload: { id },
  };
};
