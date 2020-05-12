import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.fieldset`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: white;
  padding: 33px;

  legend {
    font-size: 2rem;
    padding: 0 10px;
    margin-left: 15px;
  }

  ${({ settings }) =>
    settings &&
    css`
      height: 323px;
      max-width: 466px;
    `};
`;

const Fieldset = ({ legend, children, settings }) => (
  <StyledWrapper settings={settings}>
    <legend>{legend}</legend>
    {children}
  </StyledWrapper>
);

Fieldset.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  settings: PropTypes.node.isRequired,
};

export default Fieldset;
