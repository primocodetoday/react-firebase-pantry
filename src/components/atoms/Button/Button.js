import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledButton';

export const Button = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
