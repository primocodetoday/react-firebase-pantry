import styled from 'styled-components/macro';
import { Input } from 'atoms';

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.primary};
  height: 100vh;
  margin: 0 auto;
  text-align: center;
`;

export const StyledInput = styled(Input)`
  width: 80%;
  font-size: 2rem;
`;

export const StyledItemBar = styled.div`
  width: 60%;
  height: 1px;
  background-color: ${({ theme }) => theme.secondary};
`;
