import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 200px;
  background-color: white;
  color: #123c69;
  width: 100%;
  height: 95px;
`;

const Header = (props) => {
  return (
    <Wrapper>
      <p>Logo</p>
      <p>Pantry</p>
      <p>Button</p>
    </Wrapper>
  );
};

Header.propTypes = {};

export default Header;
