import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  color: ${({ theme }) => theme.primary};
  margin: 0 0 0 20px;
  text-align: left;
  font-family: 'Dancing Script', cursive;
  font-size: 45px;

  span {
    color: ${({ theme }) => theme.secondary};
    font-size: 1.3em;
  }
`;

const Logo = () => {
  return (
    <Wrapper>
      <span>P</span>antry
    </Wrapper>
  );
};

export default Logo;
