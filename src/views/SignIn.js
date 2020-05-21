import React, { useState } from 'react';
import styled from 'styled-components';
import { Logo, Paragraph, Input, Button } from '../components/atoms';
import SignInCard from '../components/molecules/SignInCard';

const StyledForm = styled.form`
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

const SignIn = () => {
  const [formState, setFormState] = useState({ login: '', password: '' });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SignInCard>
        <Logo big />
        <Paragraph>Menage your pantry</Paragraph>
        <StyledInput
          name="login"
          type="email"
          placeholder="login"
          value={formState.login}
          onChange={handleChange}
        />
        <StyledItemBar />
        <StyledInput
          name="password"
          type="password"
          placeholder="password"
          value={formState.password}
          onChange={handleChange}
        />
        <StyledItemBar />
        <Button type="submit">Sign In</Button>
      </SignInCard>
    </StyledForm>
  );
};

export default SignIn;
