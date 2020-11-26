import * as React from 'react';
import { Logo } from 'atoms';
import { defaultThemeProps } from 'theme/defaultThemeProps';
import PropTypes from 'prop-types';
import { Wrapper } from './SignCard.styles';

const SignCard = ({ children }) => {
  return (
    <Wrapper>
      <Logo big />
      {children}
    </Wrapper>
  );
};

SignCard.propTypes = {
  children: PropTypes.node.isRequired,
};

SignCard.defaultProps = defaultThemeProps;

export default SignCard;
