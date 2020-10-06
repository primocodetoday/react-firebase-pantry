import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
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
