import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled/StyledCardList';
import ListItem from '../ListItem/ListItem';

const CardList = ({ content }) => {
  const list = content.map(({ id, name, stock, unit }) => (
    <ListItem key={id} id={id} name={name} stock={stock} unit={unit} />
  ));

  return <Wrapper>{list}</Wrapper>;
};

CardList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardList;
