import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.fieldset`
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  padding: 25px;

  legend {
    font-size: ${({ theme }) => theme.fontSize.normal};
    padding: 0 10px;
    margin-left: 15px;
  }
`;

const Fieldset = ({ legend, children, settings }) => (
  <StyledWrapper settings={settings}>
    <legend>{legend}</legend>
    {children}
  </StyledWrapper>
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
