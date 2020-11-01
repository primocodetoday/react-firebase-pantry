import styled from 'styled-components';
import { Form } from 'formik';
import { Section } from 'components/atoms';

export const StyledWrapper = styled(Section)`
  width: auto;
`;

export const StyledForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 80px 150px;
  align-items: center;
  gap: 10px;

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
