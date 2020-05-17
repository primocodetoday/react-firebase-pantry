import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../atoms/Logo';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  width: 93vw;
  height: 65px;
  border-radius: 15px;
`;

const Topbar = () => {
  return (
    <Wrapper>
      <Logo />
      <div>
        <NavLink to="/pantry" activeclass="active">
          Main
        </NavLink>
        <NavLink to="/new" activeclass="active">
          New Item
        </NavLink>
        <NavLink to="/shoplist" activeclass="active">
          Shoplist
        </NavLink>
        <NavLink to="/settings" activeclass="active">
          Settings
        </NavLink>
      </div>
      <NavLink as={NavLink} to="/logout">
        Logout
      </NavLink>
    </Wrapper>
  );
};

export default Topbar;
