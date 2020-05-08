import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import apple from '../assets/images/apple.svg';
import Button from './Button';

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

const Logo = styled.p`
  margin: 0 0 0 20px;
  text-align: left;
  font-family: 'Dancing Script', cursive;
  font-size: 45px;

  span {
    color: #ac3b61;
    font-size: 63px;
  }
`;

const Header = (props) => {
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

Header.propTypes = {};

export default Header;
