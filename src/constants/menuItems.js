import { ROUTES } from 'routes';

export const menuItems = [
  {
    name: 'Main',
    route: ROUTES.PANTRY,
    icon: '/assets/icons/home.svg',
    activeIcon: '/assets/icons/homeActive.svg',
  },
  {
    name: 'New Item',
    route: ROUTES.NEW,
    icon: '/assets/icons/newItem.svg',
    activeIcon: '/assets/icons/newItemActive.svg',
  },
  {
    name: 'Shoplist',
    route: ROUTES.SHOPLIST,
    icon: '/assets/icons/basket.svg',
    activeIcon: '/assets/icons/basketActive.svg',
  },
  {
    name: 'Settings',
    route: ROUTES.SETTINGS,
    icon: '/assets/icons/settings.svg',
    activeIcon: '/assets/icons/settingsActive.svg',
  },
];
