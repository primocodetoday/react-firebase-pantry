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
} from '../../assets/icons';

const Wrapper = styled.header`
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-template-rows: 120px 1fr 90px;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  width: 139px;
  height: 98vh;
  border-radius: 15px;
`;

const ButtonIcon = styled.button`
  display: block;
  width: 70px;
  height: 70px;
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
    <Wrapper>
      <Logo>
        <span>P</span>antry
      </Logo>
      <div>
        <ButtonIcon
          as={NavLink}
          to="/pantry"
          activeicon={homeActive}
          icon={home}
          activeclass="active"
        />
        <ButtonIcon
          as={NavLink}
          to="/shoplist"
          activeicon={basketActive}
          icon={basket}
          activeclass="active"
        />
        <ButtonIcon
          as={NavLink}
          to="/settings"
          activeicon={settingsActive}
          icon={settings}
          activeclass="active"
        />
      </div>
      <ButtonIcon as={NavLink} to="/" icon={logout} />
    </Wrapper>
  );
};

export default Sidebar;
