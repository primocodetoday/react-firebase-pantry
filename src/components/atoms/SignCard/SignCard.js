import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledSignCard';

export const SignCard = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

SignCard.propTypes = {
  children: PropTypes.node.isRequired,
};
