import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: ${({ theme }) => theme.secondary};
  margin: 15px 0px 15px 0;
  border-radius: 15px;
  flex-basis: 370px;
  min-height: 250px;
  padding: 30px;
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 1px;
  width: 100%;
`;
