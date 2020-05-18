import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
  color: ${({ theme }) => theme.primary};
  font-family: 'Dancing Script', cursive;
  font-size: 3.5rem;
  padding: 10px;
  margin: 0;

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
