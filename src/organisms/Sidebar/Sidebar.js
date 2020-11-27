import * as React from 'react';
import { Logo, MenuIcon } from 'atoms';
import { signOut } from 'redux/actions/authActions';
import { ROUTES } from 'routes';
import { useDispatch } from 'react-redux';
import { MENU_ITEMS } from '../../constants/menuItems';
import { Wrapper } from './Sidebar.styles';

const Sidebar = () => {
  const dispatch = useDispatch();

  const menu = MENU_ITEMS.map(({ name, route, src, alt }) => {
    return <MenuIcon key={name} to={route} src={src} alt={alt} />;
  });

  return (
    <Wrapper>
      <Logo to={ROUTES.HOME} />
      {menu}
      <MenuIcon key="logout" to="" onClick={() => dispatch(signOut())} src="/assets/icons/logout.svg" alt="sign out" />
    </Wrapper>
  );
};

export default Sidebar;
