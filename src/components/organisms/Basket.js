import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: #ac3b61;
  margin: 15px 0px 15px 0;
  border-radius: 15px;
  flex-basis: 370px;
  min-height: 250px;
  padding: 30px;
`;

const Line = styled.div`
  background-color: #123c69;
  height: 1px;
  width: 100%;
`;

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
