import React from 'react';
import styled from 'styled-components';
import PantryCard from '../components/organisms/PantryCard';
import Basket from '../components/organisms/Basket';
import Input from '../components/atoms/Input';

const Wrapper = styled.section``;

const WrapperLeft = styled.div``;

const WrapperRight = styled.div``;

const Main = () => {
  return (
    <Wrapper>
      <WrapperLeft>
        <Input search />
        <section>
          Hey. This is my Pantry App…..I did it to practice React..... Click the
          new item to add. Click an item to change. The shopping list is
          automatic, but you can manually add an item
        </section>
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
