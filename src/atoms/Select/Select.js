import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledSelect';

export const Select = ({ options, ...restProps }) => {
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
