import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import ButtonIcon from '../atoms/ButtonIcon';
import { home, basket, settings } from '../../assets/icons';

const Wrapper = styled.div`
  background-color: white;
  color: #123c69;
  width: 139px;
  height: 95vh;
  border-radius: 15px;
  padding: 0 20px 0 20px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <span>P</span>antry
      </Logo>
      <ButtonIcon icon={home} />
      <ButtonIcon icon={basket} />
      <ButtonIcon icon={settings} />
      <Button>+</Button>
    </Wrapper>
  );
};

export default Header;
