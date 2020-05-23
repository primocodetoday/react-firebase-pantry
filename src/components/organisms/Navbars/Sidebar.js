import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Logo from '../../atoms/Logo';
import { routes } from '../../../routes';
import { menuItems } from './menuItems';
import { logout } from '../../../assets/icons';

const StyledWrapper = styled.header`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-template-rows: 100px repeat(4, 70px) 1fr;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  width: 110px;
  height: 96vh;
  border-radius: 15px;
  align-items: center;

  @media (max-height: 500px) {
    height: 150vh;
  }

  a {
    text-decoration: none;
  }
`;

const MenuIcon = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  color: white;
  background-position: 50% 50%;
  border: none;
  background-color: white;
  background-size: contain;
  cursor: pointer;

  &.active {
    background-image: url(${({ activeicon }) => activeicon});
  }

  &:last-child {
    align-self: end;
    margin-bottom: 30px;
  }
`;

const Sidebar = ({ signOut }) => {
  return (
    <StyledWrapper>
      <NavLink to={routes.home}>
        <Logo />
      </NavLink>
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
    </StyledWrapper>
  );
};

Sidebar.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Sidebar;
