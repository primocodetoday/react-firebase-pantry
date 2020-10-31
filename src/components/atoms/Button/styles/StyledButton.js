import styled, { css } from 'styled-components/macro';

export const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  padding: 9px 15px;
  font-size: ${({ theme }) => theme.fontSize.big};
  border: 2px solid white;
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: 'Montserrat', sans-serif;

  &:disabled,
  &[disabled] {
    border: 1px solid white;
    background-color: darkgrey;
    color: white;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: grey;
    `}
`;

Wrapper.defaultProps = {
  theme: {
    fontSize: {
      big: '2.5rem',
    },
    borderRadius: '15px',
    secondary: '#ac3b61',
  },
  secondary: false,
};
