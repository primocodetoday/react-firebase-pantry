import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.p`
  color: ${({ theme }) => theme.primary};
  font-family: 'Dancing Script', cursive;
  font-size: 3.5rem;
  margin: 0;

  ${({ big }) =>
    big &&
    css`
      font-size: 5rem;
    `}

  span {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.3em;
  }
`;

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
