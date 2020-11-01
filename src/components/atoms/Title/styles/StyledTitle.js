import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.h1`
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: 700;

  ${({ card }) =>
    card &&
    css`
      color: ${({ theme }) => theme.secondary};
    `}
`;

Wrapper.defaultProps = {
  theme: {
    secondary: '#ac3b61',
    fontSize: {
      normal: '1.6rem',
      big: '2.5rem',
    },
  },
};
