export const PANTRY_ACTION_TYPES = {
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_ITEM_ERROR: 'REMOVE_ITEM_ERROR',
  ADD_ITEM: 'ADD_ITEM',
  ADD_ITEM_ERROR: 'ADD_ITEM_ERROR',
  CHANGE_ITEM: 'CHANGE_ITEM',
  CHANGE_ITEM_ERROR: 'CHANGE_ITEM_ERROR',
  ADD_STOCK: 'ADD_STOCK',
  ADD_STOCK_ERROR: 'ADD_STOCK_ERROR',
  SUB_STOCK: 'SUB_STOCK',
  SUB_STOCK_ERROR: 'SUB_STOCK_ERROR',
};

export const removeItem = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('pantry')
      .doc(id)
      .delete()
      .then(() => {
        dispatch({
          type: PANTRY_ACTION_TYPES.REMOVE_ITEM,
          payload: { id },
        });
      })
      .catch((err) => {
        dispatch({ type: PANTRY_ACTION_TYPES.REMOVE_ITEM_ERROR, err });
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
          type: PANTRY_ACTION_TYPES.ADD_ITEM,
          payload: {
            item: {
              id: docRef.id,
              ...itemContent,
            },
          },
        });
      })
      .catch((err) => {
        dispatch({ type: PANTRY_ACTION_TYPES.ADD_ITEM_ERROR, err });
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
          type: PANTRY_ACTION_TYPES.CHANGE_ITEM,
          payload: {
            id,
            maxStock,
            minStock,
            unit,
          },
        });
      })
      .catch((err) => {
        dispatch({ type: PANTRY_ACTION_TYPES.CHANGE_ITEM_ERROR, err });
      });
  };
};

export const addStock = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firestore
      .collection('pantry')
      .doc(id)
      .update({ stock: firebase.firestore.FieldValue.increment(1) })
      .then(() => {
        dispatch({
          type: PANTRY_ACTION_TYPES.ADD_STOCK,
          payload: {
            id,
          },
        });
      })
      .catch((err) => {
        dispatch({ type: PANTRY_ACTION_TYPES.ADD_STOCK_ERROR, err });
      });
  };
};

export const subStock = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firestore
      .collection('pantry')
      .doc(id)
      .update({ stock: firebase.firestore.FieldValue.increment(-1) })
      .then(() => {
        dispatch({
          type: PANTRY_ACTION_TYPES.SUB_STOCK,
          payload: {
            id,
          },
        });
      })
      .catch((err) => {
        dispatch({ type: PANTRY_ACTION_TYPES.SUB_STOCK_ERROR, err });
      });
  };
};
