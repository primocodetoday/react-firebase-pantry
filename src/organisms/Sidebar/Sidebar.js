import * as React from 'react';
import { Logo, MenuIcon } from 'atoms';
import { signOut } from 'redux/actions/authActions';
import { ROUTES } from 'routes';
import { useDispatch } from 'react-redux';
import { menuItems } from '../../constants/menuItems';
import { Wrapper } from './Sidebar.styles';

// TODO Maybe make MenuIcon a Link

const Sidebar = () => {
  const dispatch = useDispatch();

  const menu = menuItems.map(({ name, route, src, alt }) => {
    console.log(name, route, src, alt);
    return <MenuIcon key={name} to={route} src={src} alt={alt} />;
  });

  return (
    <Wrapper>
      <Logo to={ROUTES.HOME} />
      {menu}
      <MenuIcon
        key="logout"
        to="/pantry"
        onClick={() => dispatch(signOut())}
        src="/assets/icons/logout.svg"
        alt="sign out"
      />
    </Wrapper>
  );
};

export default Sidebar;
