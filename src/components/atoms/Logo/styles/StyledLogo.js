import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
  color: ${({ theme }) => theme.primary};
  font-family: 'Dancing Script', cursive;
  font-size: 3.5rem;
  margin: 0;
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
