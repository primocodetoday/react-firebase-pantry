import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ListItem from '../atoms/ListItem';

const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 0 !important;
`;

const CardList = ({ content }) => {
  const list = content.map(({ id, name, stock }) => (
    <ListItem key={id} id={id} name={name} stock={stock} />
  ));

  return <StyledWrapper>{list}</StyledWrapper>;
};

CardList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
