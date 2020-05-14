import styled, { css } from 'styled-components';
import searchIcon from '../../assets/icons/search.svg';

const Input = styled.input`
  font-family: 'Montserrat', sans-serif;
  padding: 10px 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  color: ${({ theme }) => theme.secondary};

  ${({ search }) =>
    search &&
    css`
      padding-left: 40px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.secondary};
      font-size: 1.2rem;
      font-weight: 600;
      width: 234px;
      height: 42px;
      background-image: url(${searchIcon});
      background-size: 20px;
      background-position: 10px 50%;
      background-repeat: no-repeat;
    `};

  ${({ settings }) =>
    settings &&
    css`
      text-align: center;
      color: ${({ theme }) => theme.secondary};
      font-size: 1.8rem;
      font-weight: 600;
    `};
`;

export default Input;
