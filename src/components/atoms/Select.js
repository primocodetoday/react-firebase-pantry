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

const Select = ({ options, ...props }) => {
  const optionsList = (opt) => {
    const opst = opt.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
    return opst || null;
  };

  if (!options) {
    return <p>Loading</p>;
  }

  return (
    <StyledSelect
      // temporary solution below
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <option value="" disabled>
        select option
      </option>
      {optionsList(options)}
    </StyledSelect>
  );
};

Select.defaultProps = {
  options: null,
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Select;
