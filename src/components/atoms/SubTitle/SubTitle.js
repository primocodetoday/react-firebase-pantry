import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledSubTitle';

export const SubTitle = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
