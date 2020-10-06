import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Logo, Paragraph, Input, Button } from '../components/atoms';
import SignCard from '../components/atoms/SignCard/SignCard';
import { signIn as signInAction } from '../actions/authActions';

const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.primary};
  height: 100vh;
  margin: 0 auto;
  text-align: center;
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

const ButtonWrapper = styled.div`
  display: flex;
`;

const SignButton = styled(Button)`
  font-size: 2rem;
  text-decoration: none;

  &:first-child {
    margin-right: 20px;
  }
`;

const SignIn = ({ signIn, authError, auth, history }) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

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
    signIn(formState);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SignCard>
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
        <ButtonWrapper>
          <SignButton as={Link} to="/signup">
            Create
          </SignButton>
          <SignButton type="submit">Sign In</SignButton>
        </ButtonWrapper>

        {authError ? <Paragraph>{authError}</Paragraph> : null}
      </SignCard>
    </StyledForm>
  );
};

SignIn.defaultProps = {
  authError: '',
};

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  authError: PropTypes.string,
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
    signIn: (creds) => dispatch(signInAction(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
