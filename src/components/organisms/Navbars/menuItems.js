import { routes } from '../../../routes';
import {
  home,
  basket,
  settings,
  homeActive,
  settingsActive,
  basketActive,
  newItem,
  newItemActive,
} from '../../../assets/icons';

export const menuItems = [
  {
    name: 'Main',
    route: routes.pantry,
    icon: home,
    activeIcon: homeActive,
  },
  {
    name: 'New Item',
    route: routes.new,
    icon: newItem,
    activeIcon: newItemActive,
  },
  {
    name: 'Shoplist',
    route: routes.shoplist,
    icon: basket,
    activeIcon: basketActive,
  },
  {
    name: 'Settings',
    route: routes.settings,
    icon: settings,
    activeIcon: settingsActive,
  },
];
