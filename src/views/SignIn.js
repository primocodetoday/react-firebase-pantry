import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Logo, Paragraph, Input, Button } from '../components/atoms';
import SignInCard from '../components/molecules/SignInCard';
import { signIn as signInAction } from '../actions/authActions';

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

const SignIn = ({ signIn, authError }) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formState);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SignInCard>
        <Logo big />
        <Paragraph>Menage your pantry</Paragraph>
        <StyledInput
          name="email"
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
        {authError ? <Paragraph>{authError}</Paragraph> : null}
      </SignInCard>
    </StyledForm>
  );
};

SignIn.defaultProps = {
  authError: '',
};

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  authError: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signInAction(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
