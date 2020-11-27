export const filterByItemName = (arr, name) => arr.filter((item) => item.name.toLowerCase().includes(name));

export const uniqueCategories = (arr) => [...new Set(arr.map((item) => item.category))];

export const filterIconByCategory = (arr, category) => arr.filter((icon) => icon.name === category);

export const filterItemsByCategory = (arr, category) => arr.filter((item) => item.category === category);
