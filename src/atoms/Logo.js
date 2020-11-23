import * as React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { defaultThemeProps } from 'theme/defaultThemeProps';

const Wrapper = styled(NavLink)`
  margin: 0;
  color: ${({ theme }) => theme.primary};
  font-family: 'Dancing Script', cursive;
  font-size: 3.5rem;
  text-decoration: none;

  ${({ $big }) =>
    $big &&
    css`
      font-size: 5rem;
    `}
`;

const First = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.3em;
`;

Wrapper.defaultProps = defaultThemeProps;
First.defaultProps = defaultThemeProps;

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
