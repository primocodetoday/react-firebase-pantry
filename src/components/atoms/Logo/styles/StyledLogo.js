import styled, { css } from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
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

export const First = styled.span`
  color: ${({ theme }) => theme.secondary};
  font-size: 1.3em;
`;

Wrapper.defaultProps = {
  theme: {
    primary: '#0D2743',
    secondary: '#ac3b61',
  },
};
