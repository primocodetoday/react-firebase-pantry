import styled from 'styled-components/macro';
import { Input, Button } from 'atoms';

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
  height: 1px;
  width: 80%;
  background-color: ${({ theme }) => theme.secondary};
`;

export const ButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
`;

export const SignButton = styled(Button)`
  font-size: 2rem;
  text-decoration: none;
`;
