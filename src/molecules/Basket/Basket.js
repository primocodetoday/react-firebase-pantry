import React from 'react';
import { Title } from 'atoms';
import PropTypes from 'prop-types';
import { Wrapper, Line } from './styles/StyledBasket';

export const Basket = ({ children, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <Title card>Shop list</Title>
      <Line />
      {children}
    </Wrapper>
  );
};

Basket.propTypes = {
  children: PropTypes.node,
};

Basket.defaultProps = {
  children: undefined,
};
