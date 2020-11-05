import PropTypes from 'prop-types';
import React from 'react';
import { Wrapper } from './styles/StyledTitle';

export const Title = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
