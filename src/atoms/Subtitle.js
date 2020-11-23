import SC from 'styled-components/macro';
import PropTypes from 'prop-types';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const SubTitle = SC.p`
  padding: 0;
  margin: 0;
  color: white;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 500;
`;

SubTitle.defaultProps = defaultThemeProps;

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
