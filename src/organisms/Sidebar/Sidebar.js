import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from 'atoms';
import { signOut } from 'redux/actions/authActions';
import { ROUTES } from 'routes';
import { useDispatch } from 'react-redux';
import { menuItems } from '../../constants/menuItems';
import { Wrapper, MenuIcon } from './Sidebar.styles';

// TODO Maybe make MenuIcon a Link

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Logo to={ROUTES.HOME} />
      {menuItems.map((item) => (
        <MenuIcon
          key={item.name}
          as={NavLink}
          to={item.route}
          icon={item.icon}
          activeicon={item.activeIcon}
          activeclass="active"
        />
      ))}
      <MenuIcon key="logout" onClick={() => dispatch(signOut())} icon="/assets/icons/logout.svg" />
    </Wrapper>
  );
};

export default Sidebar;
