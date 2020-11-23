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

export const MenuIcon = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  border: none;
  color: white;
  background-position: 50% 50%;
  background-color: white;
  background-size: contain;
  cursor: pointer;

  &.active {
    background-image: url(${({ activeicon }) => activeicon});
  }

  &:last-child {
    align-self: end;
    margin-bottom: 30px;
  }
`;
