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
  plus,
  plusActive,
} from '../../assets/icons';

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
      <Logo />
      <div>
        <MenuIcon
          as={NavLink}
          to="/pantry"
          activeicon={homeActive}
          icon={home}
          activeclass="active"
        />
        <MenuIcon
          as={NavLink}
          to="/new"
          activeicon={plusActive}
          icon={plus}
          activeclass="active"
        />
        <MenuIcon
          as={NavLink}
          to="/shoplist"
          activeicon={basketActive}
          icon={basket}
          activeclass="active"
        />
        <MenuIcon
          as={NavLink}
          to="/settings"
          activeicon={settingsActive}
          icon={settings}
          activeclass="active"
        />
      </div>
      <MenuIcon as={NavLink} to="/logout" icon={logout} />
    </StyledWrapper>
  );
};

export default Sidebar;
