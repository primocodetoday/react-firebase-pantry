import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px;
  font-size: 30px;
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: 'Montserrat', sans-serif;
  border: none;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: grey;
    `}
`;

export default Button;
