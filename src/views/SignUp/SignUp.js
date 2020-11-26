import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Logo, Paragraph, Button, SignCard } from 'atoms';
import { signUp } from 'redux/actions/authActions';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { useFormik } from 'formik';
import { StyledForm, StyledInput, StyledItemBar } from './SignUp.styles';

const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  // auth selectors
  const authError = useSelector((state) => state.auth.authError);
  const auth = useSelector((state) => state.firebase.auth);

  // TODO DEV - do i need that ?
  React.useEffect(() => {
    if (!auth.isEmpty) history.push(ROUTES.PANTRY);
  });

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
    <StyledForm onSubmit={formik.handleSubmit}>
      <SignCard>
        <Logo big />
        <Paragraph>Create an account to manage your own pantry</Paragraph>
        <StyledInput
          id="email"
          name="email"
          type="email"
          placeholder="login"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <StyledItemBar />
        <StyledInput
          id="password"
          name="password"
          type="password"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <StyledItemBar />
        <StyledInput
          id="firstName"
          name="firstName"
          type="text"
          placeholder="first name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        <StyledItemBar />
        <Button type="submit">Sign Up</Button>
        {authError ? <Paragraph>{authError}</Paragraph> : null}
      </SignCard>
    </StyledForm>
  );
};

export default SignUp;
