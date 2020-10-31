import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledButton';

export const Button = ({ children, secondary, ...restProps }) => {
  return (
    <Wrapper secondary={secondary} {...restProps}>
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  secondary: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  secondary: false,
};
