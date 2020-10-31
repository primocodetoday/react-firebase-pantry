import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from 'assets/icons';
import { Logo } from 'components/atoms';
import { routes } from 'routes';
import { menuItems } from '../menuItems';
import { Wrapper, MenuIcon } from './styles/StyledSidebar';

// TODO Maybe make MenuIcon a Link

const Sidebar = ({ signOut }) => {
  return (
    <Wrapper>
      <Logo to={routes.home} />
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
      <MenuIcon key="logout" onClick={signOut} icon={logout} />
    </Wrapper>
  );
};

Sidebar.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Sidebar;
