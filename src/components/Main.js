import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';
import ShopList from './ShopList';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WrapperLeft = styled.div`
  flex-grow: 1;
  flex-basis: 74%;
  display: flex;
  flex-wrap: wrap;
`;

const WrapperRight = styled.div`
  flex-basis: 26%;
  flex-grow: 1;
`;

function Main() {
  return (
    <Wrapper>
      <WrapperLeft>
        <Card title="Fruits & Vegs" />
        <Card title="Chemicals" />
        <Card title="Meats & Fishes" />
        <Card title="Grains & Nuts" />
        <Card title="Dairy Foods" />
        <Card title="Drinks" />
      </WrapperLeft>
      <WrapperRight>
        <ShopList />
      </WrapperRight>
    </Wrapper>
  );
}

Main.propTypes = {};

export default Main;
