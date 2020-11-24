import styled from 'styled-components';

export const Wrapper = styled.header`
  display: grid;
  align-items: center;
  flex-shrink: 0;
  grid-template-columns: 1fr;
  justify-items: center;
  grid-template-rows: 85px repeat(4, 70px) 1fr;
  width: 110px;
  height: 96vh;
  background-color: white;
  color: ${({ theme }) => theme.primary};
  border-radius: 15px;

  @media (max-height: 500px) {
    height: 150vh;
  }

  a {
    text-decoration: none;
  }
`;
