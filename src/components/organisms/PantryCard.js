import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Title from '../atoms/Title';

const Wrapper = styled.div`
  flex-grow: 1;
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-basis: 250px;
  color: #123c69;
  margin: 15px 15px 15px 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 200px;
  padding: 30px;

  @media (max-width: 710px) {
    margin: 10px 5px 10px 5px;
  }
`;

const Line = styled.div`
  background-color: #123c69;
  height: 1px;
  width: 100%;
`;

const PantryCard = ({ category }) => {
  return (
    <Wrapper>
      <Title card>{category}</Title>
      <Line />
      <p>List</p>
    </Wrapper>
  );
};

PantryCard.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PantryCard;
