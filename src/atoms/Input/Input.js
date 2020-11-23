import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledInput';

export const Input = ({ search, settings, ...restProps }) => {
  return <Wrapper search={search} settings={settings} {...restProps} data-testid="input" />;
};

Input.propTypes = {
  search: PropTypes.bool,
  settings: PropTypes.bool,
};

Input.defaultProps = {
  search: false,
  settings: false,
};
