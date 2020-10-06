import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  padding: 9px 15px;
  font-size: ${({ theme }) => theme.fontSize.big};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: 'Montserrat', sans-serif;
  border: 2px solid white;

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

export default Button;
