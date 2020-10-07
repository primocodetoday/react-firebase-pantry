import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles/StyledSelect';

// TODO refactor this
const Select = ({ options, ...restProps }) => {
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
    <Wrapper {...restProps}>
      <option value="" disabled>
        select option
      </option>
      {optionsList(options)}
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
