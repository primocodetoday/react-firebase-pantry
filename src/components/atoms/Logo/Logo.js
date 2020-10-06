import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled/StyledLogo';

const Logo = ({ big }) => {
  return (
    <Wrapper big={big}>
      <span>P</span>antry
    </Wrapper>
  );
};

Logo.defaultProps = {
  big: false,
};

Logo.propTypes = {
  big: PropTypes.bool,
};

export default Logo;
