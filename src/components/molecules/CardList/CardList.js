import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'components/molecules';
import { Wrapper } from './styles/StyledCardList';

export const CardList = ({ content }) => {
  const list = content.map(({ id, name, stock, unit }) => (
    <ListItem key={id} id={id} name={name} stock={stock} unit={unit} />
  ));

  return <Wrapper>{list}</Wrapper>;
};

CardList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
