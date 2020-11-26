import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { defaultThemeProps } from 'theme/defaultThemeProps';

const Button = styled.button`
  cursor: pointer;
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

  ${({ sign }) =>
    sign &&
    css`
      align-self: center;
      width: 50%;
      font-size: 2rem;
      text-decoration: none;
      margin: 20px 0;
    `}
`;

Button.propTypes = {
  secondary: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = defaultThemeProps;

export default Button;
