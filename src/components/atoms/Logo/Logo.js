import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, First } from './styles/StyledLogo';

export const Logo = ({ to, big, ...restProps }) => {
  return (
    <Wrapper to={to} $big={big} {...restProps}>
      <First>P</First>antry
    </Wrapper>
  );
};

Logo.propTypes = {
  big: PropTypes.bool,
  to: PropTypes.string,
};

Logo.defaultProps = {
  big: false,
  to: '/',
};
