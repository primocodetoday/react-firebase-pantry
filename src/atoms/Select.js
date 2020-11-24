import * as React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const Wrapper = styled.select`
  text-align: center;
  text-align-last: center;
  padding: 10px 10px;
  border: none;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.6rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  option {
    text-align: left;
  }
`;

Wrapper.defaultProps = defaultThemeProps;

const Select = ({ options, ...restProps }) => {
  const selectOptions = options
    ? options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))
    : null;

  return (
    <Wrapper {...restProps} data-testid="select">
      <option disabled>select option</option>
      {selectOptions}
    </Wrapper>
  );
};

Select.defaultProps = {
  options: null,
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Select;
