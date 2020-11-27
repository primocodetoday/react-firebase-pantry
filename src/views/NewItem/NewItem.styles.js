import styled from 'styled-components/macro';
import { Form } from 'formik';
import { Section } from 'atoms';

export const StyledWrapper = styled(Section)`
  width: auto;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  label {
    color: white;
  }

  .grid-label {
    grid-column: 1/2;
  }

  .grid-button {
    justify-self: end;
    align-self: center;
    grid-column: 3/4;
    margin-top: 20px;
  }
  .grid-input {
    text-align: center;
    grid-column: 3/4;
  }
`;
