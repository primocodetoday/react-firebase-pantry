import styled from 'styled-components';

export const Wrapper = styled.select`
  text-align: center;
  color: ${({ theme }) => theme.secondary};
  font-size: 1.6rem;
  padding: 10px 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
`;
