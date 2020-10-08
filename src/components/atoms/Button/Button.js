import React from 'react';
import { Wrapper } from './styles/StyledButton';

const Button = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

export default Button;
