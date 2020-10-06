import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
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
