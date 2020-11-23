import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Logo, Paragraph, SignCard } from 'atoms';
import { signIn as signInAction } from 'redux/actions/authActions';
import { ROUTES } from 'routes';
import { StyledForm, StyledInput, StyledItemBar, ButtonWrapper, SignButton } from './styles/StyledSignIn';

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
        <StyledInput name="email" type="email" placeholder="login" value={formState.login} onChange={handleChange} />
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
          <SignButton type="submit">Sign In</SignButton>
        </ButtonWrapper>
        <Paragraph>
          To create a account click <Link to={ROUTES.signUp}>here</Link>
        </Paragraph>

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
