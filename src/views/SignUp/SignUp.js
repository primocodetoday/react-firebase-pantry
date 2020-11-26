import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paragraph, Button } from 'atoms';
import { SignCard } from 'organisms';
import { signUp } from 'redux/actions/authActions';
import { ROUTES } from 'routes';
import { useFormik } from 'formik';
import SignTemplate from 'templates/SignTemplate/SignTemplate';
import { Link } from 'react-router-dom';
import { StyledForm, StyledInput } from './SignUp.styles';

const SignUp = () => {
  const dispatch = useDispatch();

  // auth selectors
  const authError = useSelector((state) => state.auth.authError);

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(signUp(values));
    },
  });

  return (
    <SignTemplate>
      <SignCard>
        <StyledForm onSubmit={formik.handleSubmit}>
          <Paragraph>Create an account to manage your own pantry</Paragraph>
          <StyledInput
            label
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <StyledInput
            label
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <StyledInput
            label
            id="firstName"
            name="firstName"
            type="text"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <Button sign type="submit">
            Sign Up
          </Button>
          <Paragraph>
            To login click <Link to={ROUTES.SIGNIN}>here</Link>
          </Paragraph>
          {authError ? <Paragraph>{authError}</Paragraph> : null}
        </StyledForm>
      </SignCard>
    </SignTemplate>
  );
};

export default SignUp;
