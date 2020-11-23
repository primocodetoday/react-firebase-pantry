import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledFieldset';

export const Fieldset = ({ legend, children, ...restProps }) => {
  const isLegendPassed = legend ? <legend>{legend}</legend> : null;

  return (
    <Wrapper {...restProps}>
      {isLegendPassed}
      {children}
    </Wrapper>
  );
};

Fieldset.defaultProps = {
  legend: '',
};

Fieldset.propTypes = {
  legend: PropTypes.string,
  children: PropTypes.node.isRequired,
};
