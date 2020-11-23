import { home, basket, settings, homeActive, settingsActive, basketActive, newItem, newItemActive } from 'assets/icons';
import { ROUTES } from 'routes';

export const menuItems = [
  {
    name: 'Main',
    route: ROUTES.PANTRY,
    icon: home,
    activeIcon: homeActive,
  },
  {
    name: 'New Item',
    route: ROUTES.NEW,
    icon: newItem,
    activeIcon: newItemActive,
  },
  {
    name: 'Shoplist',
    route: ROUTES.SHOPLIST,
    icon: basket,
    activeIcon: basketActive,
  },
  {
    name: 'Settings',
    route: ROUTES.SETTINGS,
    icon: settings,
    activeIcon: settingsActive,
  },
];
