import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledButtonIcon';

export const ButtonIcon = ({ icon, ...restProps }) => {
  return <Wrapper icon={icon} {...restProps} />;
};

ButtonIcon.propTypes = {
  icon: PropTypes.string,
};

ButtonIcon.defaultProps = {
  icon: '/assets/icon/testIcon.svg',
};
