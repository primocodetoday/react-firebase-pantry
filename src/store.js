import {
  fruits,
  dairy,
  drinks,
  grains,
  meats,
  chemicals,
} from './assets/icons';

export const store = [
  {
    category: 'Fruits & Vegs',
    icon: fruits,
    list: [
      { id: 1, name: 'Carrots', stock: 1.5, unit: 'kg', maxStock: 2 },
      { id: 2, name: 'Potatoes', stock: 3, unit: 'kg', maxStock: 5 },
      { id: 3, name: 'Cabbage', stock: 0.5, unit: 'kg', maxStock: 2 },
    ],
  },
  {
    category: 'Chemicals',
    icon: chemicals,
    list: [
      {
        id: 4,
        name: 'Carpet cleaner',
        stock: 1,
        unit: 'pcs',
        maxStock: 2,
      },
      {
        id: 5,
        name: 'Dishwashing detergent',
        stock: 0.7,
        unit: 'liter',
        maxStock: 2,
      },
    ],
  },
  {
    category: 'Meats & Fishes',
    icon: meats,
    list: [
      { id: 6, name: 'Beef steak', stock: 1.5, unit: 'kg', maxStock: 2 },
      { id: 7, name: 'Chicken', stock: 1, unit: 'kg', maxStock: 5 },
    ],
  },
  {
    category: 'Grains & Nuts',
    icon: grains,
    list: [
      { id: 8, name: 'Flour', stock: 0.5, unit: 'kg', maxStock: 1 },
      { id: 9, name: 'Coffee beans', stock: 1, unit: 'kg', maxStock: 2 },
      { id: 10, name: 'Rice', stock: 1, unit: 'kg', maxStock: 2 },
    ],
  },
  {
    category: 'Dairy Foods',
    icon: dairy,
    list: [{ id: 11, name: 'Milk', stock: 4, unit: 'pcs', maxStock: 10 }],
  },
  {
    category: 'Drinks',
    icon: drinks,
    list: [
      { id: 12, name: 'Wine', stock: 2, unit: 'pcs', maxStock: 5 },
      { id: 13, name: 'Cola Bottle 2L', stock: 1, unit: 'pcs', maxStock: 2 },
    ],
  },
];
