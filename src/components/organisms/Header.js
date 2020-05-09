import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';

import apple from '../../assets/images/apple.svg';
import Button from '../atoms/Button';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 162px;
  align-items: center;
  background-color: white;
  color: #123c69;
  width: 100%;
  height: 95px;
  border-radius: 15px;
  padding: 0 20px 0 20px;
`;

const Header = () => {
  return (
    <Wrapper>
      <img src={apple} alt="logo" />
      <Logo>
        <span>P</span>antry
      </Logo>
      <Button>add Item</Button>
    </Wrapper>
  );
};

export default Header;
