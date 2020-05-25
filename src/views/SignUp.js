import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Logo, Paragraph, Input, Button } from '../components/atoms';
import SignCard from '../components/molecules/SignCard';
import { signUp as signUpAction } from '../actions/authActions';

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

const SignUp = ({ signUp, authError, auth, history }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!auth.isEmpty) history.push('/pantry');
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(formState);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SignCard>
        <Logo big />
        <Paragraph>Create an account to manage your own pantry</Paragraph>

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
        <StyledInput
          name="firstName"
          type="text"
          placeholder="firstname"
          value={formState.firstname}
          onChange={handleChange}
        />
        <StyledItemBar />
        <StyledInput
          name="lastName"
          type="text"
          placeholder="lastname"
          value={formState.lastname}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
        {authError ? <Paragraph>{authError}</Paragraph> : null}
      </SignCard>
    </StyledForm>
  );
};

SignUp.defaultProps = {
  authError: '',
};

SignUp.propTypes = {
  authError: PropTypes.string,
  signUp: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUpAction(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
