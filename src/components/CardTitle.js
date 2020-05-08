import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h1`
  color: #ac3b61;
  font-size: 25px;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 18px;
  margin-right: 10px;
  text-align: right;
`;

function CardTitle({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default CardTitle;
