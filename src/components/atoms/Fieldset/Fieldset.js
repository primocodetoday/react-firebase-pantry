import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styled/StyledFieldset';

const Fieldset = ({ legend, children, settings }) => (
  <Wrapper settings={settings}>
    <legend>{legend}</legend>
    {children}
  </Wrapper>
);

Fieldset.defaultProps = {
  settings: false,
};

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  settings: PropTypes.bool,
};

export default Fieldset;
