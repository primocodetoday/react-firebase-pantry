import React from 'react';
import Title from 'components/atoms';
import { Wrapper, Line } from './styled/StyledBasket';

const Basket = () => {
  return (
    <Wrapper>
      <Title>ShopList</Title>
      <Line />
      <p>List</p>
    </Wrapper>
  );
};

export default Basket;
