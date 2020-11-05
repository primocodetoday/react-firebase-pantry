﻿import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'components/molecules';
import { Wrapper } from './styles/StyledCardList';

export const CardList = ({ content, ...restProps }) => {
  const list = content.map(({ id, name, stock, unit }) => (
    <ListItem key={id} id={id} name={name} stock={stock} unit={unit} />
  ));

  return <Wrapper {...restProps}>{list}</Wrapper>;
};

CardList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
