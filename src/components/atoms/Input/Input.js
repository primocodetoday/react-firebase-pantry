import styled, { css } from 'styled-components';
import searchIcon from 'assets/icons/search.svg';

const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  padding: 10px 10px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  color: ${({ theme }) => theme.secondary};
  text-align: center;

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${({ search }) =>
    search &&
    css`
      padding-left: 40px;
      color: ${({ theme }) => theme.secondary};
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: 600;
      width: 234px;
      height: 42px;
      background-image: url(${searchIcon});
      background-size: 20px;
      background-position: 10px 50%;
      background-repeat: no-repeat;
      text-align: left;
    `};

  ${({ settings }) =>
    settings &&
    css`
      text-align: center;
      color: ${({ theme }) => theme.secondary};
      font-weight: 600;
    `};
`;

export default Input;
