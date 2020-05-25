export const removeItem = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('pantry')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: 'REMOVE_ITEM',
          payload: { id },
        });
      })
      .catch((err) => {
        dispatch({ type: 'REMOVE_ITEM_ERROR', err });
      });
  };
};

export const addItem = (itemContent) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('pantry')
      .add(itemContent)
      .then((docRef) => {
        dispatch({
          type: 'ADD_ITEM',
          payload: {
            item: {
              id: docRef.id,
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

export const changeItem = (id, maxStock, minStock, unit) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('pantry')
      .doc(id)
      .update({
        maxStock,
        minStock,
        unit,
      })
      .then(() => {
        dispatch({
          type: 'CHANGE_ITEM',
          payload: {
            id,
            maxStock,
            minStock,
            unit,
          },
        });
      })
      .catch((err) => {
        dispatch({ type: 'CHANGE_ITEM_ERROR', err });
      });
  };
};

export const addStock = (id) => {
  return {
    type: 'ADD_STOCK',
    payload: { id },
  };
};
export const subStock = (id) => {
  return {
    type: 'SUB_STOCK',
    payload: { id },
  };
};
