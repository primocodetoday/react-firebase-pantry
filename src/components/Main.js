import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

function Main(props) {
  return (
    <Wrapper>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      <div>Shoplist</div>
    </Wrapper>
  );
}

Main.propTypes = {};

export default Main;
