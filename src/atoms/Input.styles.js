﻿import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { defaultThemeProps } from 'theme/defaultThemeProps';

// TODO DEV - rebuild this with optional label

export const InputWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const SCInput = styled.input`
  width: 100%;
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

export const SCLabel = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.secondary};
  margin-right: 20px;
`;

SCInput.propTypes = {
  search: PropTypes.bool,
  settings: PropTypes.bool,
};

SCInput.defaultProps = defaultThemeProps;