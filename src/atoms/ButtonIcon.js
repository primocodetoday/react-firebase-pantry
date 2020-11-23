import SC from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';
import PropTypes from 'prop-types';

export const ButtonIcon = SC.button`
  width: 42px;
  height: 37px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  background-color: ${({ theme }) => theme.secondary};
  padding: 5px;
  border: 2px solid white;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
`;

ButtonIcon.propTypes = {
  icon: PropTypes.string,
};

ButtonIcon.defaultProps = defaultThemeProps;
