import * as React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'molecules';
import { Wrapper } from './CardList.styles';

export const CardList = ({ content, ...restProps }) => {
  const list = content.map(({ id, name, stock, unit }) => (
    <ListItem key={id} id={id} name={name} stock={stock} unit={unit} />
  ));

  return <Wrapper {...restProps}>{list}</Wrapper>;
};

CardList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
