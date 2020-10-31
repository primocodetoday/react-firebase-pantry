import styled, { css } from 'styled-components';
import searchIcon from 'assets/icons/search.svg';

export const Wrapper = styled.input`
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
      width: 234px;
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: 600;
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

Wrapper.defaultProps = {
  theme: {
    fontSize: {
      normal: '1.6rem',
      small: '1.2rem',
    },
    borderRadius: '15px',
    secondary: '#ac3b61',
  },
};
