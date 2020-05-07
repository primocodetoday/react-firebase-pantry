import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  min-width: 317px;
  color: #ac3b61;
  margin: 18px;
  border-radius: 15px;
  min-height: 250px;
`;

const Card = () => {
  return (
    <Wrapper>
      <p>Title</p>
      <p>......</p>
      <p>List</p>
    </Wrapper>
  );
};

export default Card;
