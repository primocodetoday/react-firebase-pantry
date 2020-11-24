import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { defaultThemeProps } from 'theme/defaultThemeProps';

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
    margin: 0;
    -webkit-appearance: none;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${({ search }) =>
    search &&
    css`
      padding-left: 40px;
      width: 234px;
      height: 42px;
      color: ${({ theme }) => theme.secondary};
      font-size: ${({ theme }) => theme.fontSize.small};
      font-weight: 600;
      background-image: url('/assets/icons/search.svg');
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

Input.propTypes = {
  search: PropTypes.bool,
  settings: PropTypes.bool,
};

Input.defaultProps = defaultThemeProps;

export default Input;
