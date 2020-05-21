import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import {
  home,
  basket,
  settings,
  logout,
  homeActive,
  settingsActive,
  basketActive,
  newItem,
  newItemActive,
} from '../../assets/icons';
import { routes } from '../../routes';

const StyledWrapper = styled.header`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-template-rows: 100px 1fr 90px;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  width: 110px;
  height: 96vh;
  border-radius: 15px;

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
  margin-bottom: 30px;

  &.active {
    background-image: url(${({ activeicon }) => activeicon});
  }
`;

const Sidebar = () => {
  return (
    <StyledWrapper>
      <NavLink to={routes.home}>
        <Logo />
      </NavLink>
      <div>
        <MenuIcon
          as={NavLink}
          to={routes.pantry}
          activeicon={homeActive}
          icon={home}
          activeclass="active"
        />
        <MenuIcon
          as={NavLink}
          to={routes.new}
          activeicon={newItemActive}
          icon={newItem}
          activeclass="active"
        />
        <MenuIcon
          as={NavLink}
          to={routes.shoplist}
          activeicon={basketActive}
          icon={basket}
          activeclass="active"
        />
        <MenuIcon
          as={NavLink}
          to={routes.settings}
          activeicon={settingsActive}
          icon={settings}
          activeclass="active"
        />
      </div>
      <MenuIcon as={NavLink} to={routes.signIn} icon={logout} />
    </StyledWrapper>
  );
};

export default Sidebar;
