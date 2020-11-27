import * as React from 'react';
import PropTypes from 'prop-types';
import { SCInput, SCLabel, InputWrapper } from './Input.styles';

const Input = ({ name, id, label, ...restProps }) => {
  return (
    <InputWrapper>
      {label && <SCLabel htmlFor={id}>{name}: </SCLabel>}
      <SCInput data-testid="input" name={name} id={id} {...restProps} />
    </InputWrapper>
  );
};

Input.defaultProps = {
  label: false,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.bool,
};

export default Input;
