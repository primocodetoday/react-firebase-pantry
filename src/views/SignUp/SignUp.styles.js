import styled from 'styled-components/macro';
import { Input } from 'atoms';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled(Input)`
  width: 80%;
  font-size: 2rem;
`;
