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
      { name: 'Carrots', stock: 1.5, unit: 'kg', maxStock: 2 },
      { name: 'Potatoes', stock: 3, unit: 'kg', maxStock: 5 },
      { name: 'Cabbage', stock: 0.5, unit: 'kg', maxStock: 2 },
    ],
  },
  {
    category: 'Chemicals',
    icon: chemicals,
    list: [
      { name: 'Carpet cleaner', stock: 1, unit: 'pcs', maxStock: 2 },
      {
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
      { name: 'Beef steak', stock: 1.5, unit: 'kg', maxStock: 2 },
      { name: 'Chicken', stock: 1, unit: 'kg', maxStock: 5 },
    ],
  },
  {
    category: 'Grains & Nuts',
    icon: grains,
    list: [
      { name: 'Flour', stock: 0.5, unit: 'kg', maxStock: 1 },
      { name: 'Coffee beans', stock: 1, unit: 'kg', maxStock: 2 },
      { name: 'Rice', stock: 1, unit: 'kg', maxStock: 2 },
    ],
  },
  {
    category: 'Dairy Foods',
    icon: dairy,
    list: [{ name: 'Milk', stock: 4, unit: 'pcs', maxStock: 10 }],
  },
  {
    category: 'Drinks',
    icon: drinks,
    list: [
      { name: 'Wine', stock: 2, unit: 'pcs', maxStock: 5 },
      { name: 'Cola Bottle 2L', stock: 1, unit: 'pcs', maxStock: 2 },
    ],
  },
];
