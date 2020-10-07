import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, First } from './styles/StyledLogo';

const Logo = ({ to = '/', big, ...restProps }) => {
  return (
    <Wrapper to={to} big={big ? 1 : 0} {...restProps}>
      <First>P</First>antry
    </Wrapper>
  );
};

Logo.defaultProps = {
  big: false,
  to: '/',
};

Logo.propTypes = {
  big: PropTypes.bool,
  to: PropTypes.string,
};

export default Logo;
