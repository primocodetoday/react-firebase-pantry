import React from 'react';
import styled from 'styled-components';
import PantryCard from '../components/organisms/PantryCard';
import Basket from '../components/organisms/Basket';

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

const Main = () => {
  return (
    <Wrapper>
      <WrapperLeft>
        <p>Serch</p>
        <p>Info bar</p>
        <PantryCard category="Fruits & Vegs" />
        <PantryCard category="Chemicals" />
        <PantryCard category="Meats & Fishes" />
        <PantryCard category="Grains & Nuts" />
        <PantryCard category="Dairy Foods" />
        <PantryCard category="Drinks" />
      </WrapperLeft>
      <WrapperRight>
        <Basket />
      </WrapperRight>
    </Wrapper>
  );
};

export default Main;
