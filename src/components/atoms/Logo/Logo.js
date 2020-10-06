import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled/StyledLogo';

const Logo = ({ to = '/', big, ...restProps }) => {
  return (
    <Wrapper to={to} big={big ? 1 : 0} {...restProps}>
      <span>P</span>antry
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
