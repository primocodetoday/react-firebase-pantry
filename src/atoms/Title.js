import SC, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Title = SC.h1`
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: 700;

  ${({ card }) =>
    card &&
    css`
      color: ${({ theme }) => theme.secondary};
    `}
`;

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

Title.defaultProps = defaultThemeProps;
