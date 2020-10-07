import styled from 'styled-components';
import { Input } from 'components/atoms';

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.primary};
  height: 100vh;
  margin: 0 auto;
`;

export const StyledInput = styled(Input)`
  width: 80%;
  font-size: 2rem;
`;

export const StyledItemBar = styled.div`
  height: 1px;
  width: 60%;
  background-color: ${({ theme }) => theme.secondary};
`;
