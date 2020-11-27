import * as React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/macro';
import { defaultThemeProps } from 'theme/defaultThemeProps';

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const SCSelect = styled.select`
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

export const SCLabel = styled.label`
  width: 100%;
  color: ${({ theme }) => theme.secondary};
  margin-right: 20px;
`;

SelectWrapper.defaultProps = defaultThemeProps;

const Select = ({ options, id, name, label, ...restProps }) => {
  const selectOptions = React.useMemo(
    () =>
      options
        ? options.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        : [],
    [options],
  );

  return (
    <SelectWrapper>
      {label && <SCLabel htmlFor={id}>{name}: </SCLabel>}
      <SCSelect id={id} name={name} {...restProps} data-testid="select">
        <option disabled>select option</option>
        {selectOptions}
      </SCSelect>
    </SelectWrapper>
  );
};

Select.defaultProps = {
  options: null,
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Select;
