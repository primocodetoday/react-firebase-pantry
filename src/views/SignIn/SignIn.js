import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paragraph, Button } from 'atoms';
import { SignCard } from 'organisms';
import { signIn } from 'redux/actions/authActions';
import { ROUTES } from 'routes';
import { useFormik } from 'formik';
import SignTemplate from 'templates/SignTemplate/SignTemplate';
import { StyledForm, StyledInput } from './SignIn.styles';

const SignIn = () => {
  const dispatch = useDispatch();

  const authError = useSelector((state) => state.auth.authError);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      dispatch(signIn(values));
    },
  });

  return (
    <SignTemplate>
      <SignCard>
        <Paragraph>Menage your pantry</Paragraph>
        <StyledForm onSubmit={formik.handleSubmit}>
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
          <Button sign type="submit">
            Sign In
          </Button>
          <Paragraph>
            To create a account click <Link to={ROUTES.SIGNUP}>here</Link>
          </Paragraph>

          {authError ? <Paragraph>{authError}</Paragraph> : null}
        </StyledForm>
      </SignCard>
    </SignTemplate>
  );
};

export default SignIn;
