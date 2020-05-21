import React from 'react';
import styled from 'styled-components';
import {
  SignInCard,
  Logo,
  Paragraph,
  Input,
  Button,
} from '../components/atoms';

const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.primary};
  height: 100vh;
  margin: 0 auto;
`;

const StyledInput = styled(Input)`
  width: 80%;
  font-size: 2rem;
`;

const StyledItemBar = styled.div`
  height: 1px;
  width: 60%;
  background-color: ${({ theme }) => theme.secondary};
`;

const SignIn = () => (
  <StyledWrapper>
    <SignInCard>
      <Logo big />
      <Paragraph>Menage your pantry</Paragraph>
      <StyledInput name="login" type="email" placeholder="login" />
      <StyledItemBar />
      <StyledInput name="pass" type="password" placeholder="password" />
      <StyledItemBar />
      <Button>Sign In</Button>
    </SignInCard>
  </StyledWrapper>
);

export default SignIn;
