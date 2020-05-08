import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardTitle from './CardTitle';

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

const ShopList = (props) => {
  return (
    <Wrapper>
      <CardTitle>ShopList</CardTitle>
      <Line />
      <p>List</p>
    </Wrapper>
  );
};

ShopList.propTypes = {};

export default ShopList;
