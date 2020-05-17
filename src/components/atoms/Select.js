import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSelect = styled.select`
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.6rem;
  padding: 10px 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
`;

const Select = ({ options, value, id, label, onChange, ...props }) => {
  const optionsList = options.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <StyledSelect
      onChange={onChange}
      name="pets"
      id={id}
      value={value}
      // temporary solution below
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {optionsList}
    </StyledSelect>
  );
};

Select.defaultProps = {
  label: false,
  id: '',
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Select;
