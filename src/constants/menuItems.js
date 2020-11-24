import { ROUTES } from 'routes';

export const menuItems = [
  {
    name: 'Main',
    route: ROUTES.PANTRY,
    src: '/assets/icons/home.svg',
    alt: 'home',
  },
  {
    name: 'New Item',
    route: ROUTES.NEW,
    src: '/assets/icons/newItem.svg',
    alt: 'new item',
  },
  {
    name: 'Shoplist',
    route: ROUTES.SHOPLIST,
    src: '/assets/icons/basket.svg',
    alt: 'shop list',
  },
  {
    name: 'Settings',
    route: ROUTES.SETTINGS,
    src: '/assets/icons/settings.svg',
    alt: 'settings',
  },
];
