export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: { id },
  };
};

export const addItem = (itemContent) => {
  const getId = () => Math.floor(Math.random() * (9999 - 1 + 1)) + 1;
  return {
    type: 'ADD_ITEM',
    payload: {
      item: {
        id: getId(),
        ...itemContent,
      },
    },
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
