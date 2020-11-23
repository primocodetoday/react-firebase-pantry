import * as React from 'react';
import PropTypes from 'prop-types';
import SC from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = SC.fieldset`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 25px;
  color: white;

  legend {
    font-size: ${({ theme }) => theme.fontSize.normal};
    padding: 0 10px;
    margin-left: 15px;
  }
`;

Wrapper.defaultProps = defaultThemeProps;

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
