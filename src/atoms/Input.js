import * as React from 'react';
import { SCInput, SCLabel, InputWrapper } from './Input.styles';

const Input = ({ name, id, label, ...restProps }) => {
  return (
    <InputWrapper>
      {label && <SCLabel htmlFor={id}>{name}: </SCLabel>}
      <SCInput name={name} id={id} {...restProps} />
    </InputWrapper>
  );
};

export default Input;
