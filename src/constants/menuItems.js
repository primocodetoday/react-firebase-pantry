import { home, basket, settings, homeActive, settingsActive, basketActive, newItem, newItemActive } from 'assets/icons';
import { ROUTES } from 'routes';

export const menuItems = [
  {
    name: 'Main',
    route: ROUTES.pantry,
    icon: home,
    activeIcon: homeActive,
  },
  {
    name: 'New Item',
    route: ROUTES.new,
    icon: newItem,
    activeIcon: newItemActive,
  },
  {
    name: 'Shoplist',
    route: ROUTES.shoplist,
    icon: basket,
    activeIcon: basketActive,
  },
  {
    name: 'Settings',
    route: ROUTES.settings,
    icon: settings,
    activeIcon: settingsActive,
  },
];
