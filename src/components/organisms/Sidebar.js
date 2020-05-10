import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import { home, basket, settings } from '../../assets/icons';

const Wrapper = styled.header`
  flex-shrink: 0;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 100px 100px 1fr 50px;
  justify-items: center;
  color: ${({ theme }) => theme.primary};
  width: 139px;
  height: 98vh;
  border-radius: 15px;
`;

const ButtonIcon = styled.button`
  width: 80px;
  height: 80px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  color: white;
  background-position: 50% 50%;
  border: none;
  background-color: white;
  background-size: 80%;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo>
        <span>P</span>antry
      </Logo>
      <ButtonIcon icon={home} />
      <ButtonIcon icon={basket} />
      <ButtonIcon icon={settings} />
      <Button>ADD</Button>
    </Wrapper>
  );
};

export default Sidebar;
