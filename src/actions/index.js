export const removeItem = (id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: { id },
  };
};
