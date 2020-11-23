import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Logo, Paragraph, Button, SignCard } from 'atoms';
import { signUp as signUpAction } from 'redux/actions/authActions';
import { StyledForm, StyledInput, StyledItemBar } from './SignUp.styles';

const SignUp = ({ signUp, history }) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    firstName: '',
  });

  // auth selectors
  const authError = useSelector((state) => state.auth.authError);
  const auth = useSelector((state) => state.firebase.auth);

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
        <StyledInput
          name="firstName"
          type="text"
          placeholder="firstname"
          value={formState.firstname}
          onChange={handleChange}
        />
        <StyledItemBar />
        <Button type="submit">Sign Up</Button>
        {authError ? <Paragraph>{authError}</Paragraph> : null}
      </SignCard>
    </StyledForm>
  );
};

SignUp.defaultProps = {
  // authError: '',
};

SignUp.propTypes = {
  // authError: PropTypes.string,
  signUp: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  // auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

// const mapStateToProps = (state) => {
//   return {
//     authError: state.auth.authError,
//     auth: state.firebase.auth,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUpAction(newUser)),
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
