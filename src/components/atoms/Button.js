import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #ac3b61;
  width: 162px;
  height: 51px;
  font-size: 20px;
  color: white;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  border: none;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: grey;
    `}
`;

export default Button;
