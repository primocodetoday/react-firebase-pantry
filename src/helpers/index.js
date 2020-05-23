export const filterIdById = (arr, id) => {
  const [item] = arr.filter((product) => product.id === id);
  return item ? item.id : null;
};

export const filterItemById = (arr, id) => {
  const [item] = arr.filter((product) => product.id === id);
  return item || null;
};

export const extractUnits = (arr) => {
  const units = [...new Set(arr.map((product) => product.unit))];
  return units || null;
};
