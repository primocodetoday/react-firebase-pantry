import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Logo, Paragraph, SignCard } from 'atoms';
import { signIn } from 'redux/actions/authActions';
import { ROUTES } from 'routes';
import { useFormik } from 'formik';
import { StyledForm, StyledInput, StyledItemBar, ButtonWrapper, SignButton } from './SignIn.styles';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const authError = useSelector((state) => state.auth.authError);
  const auth = useSelector((state) => state.firebase.auth);

  // TODO DEV - do i need that ?
  React.useEffect(() => {
    if (!auth.isEmpty) history.push(ROUTES.PANTRY);
  });

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
    <StyledForm onSubmit={formik.handleSubmit}>
      <SignCard>
        <Logo big />
        <Paragraph>Menage your pantry</Paragraph>
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
        <ButtonWrapper>
          <SignButton type="submit">Sign In</SignButton>
        </ButtonWrapper>
        <Paragraph>
          To create a account click <Link to={ROUTES.SIGNUP}>here</Link>
        </Paragraph>

        {authError ? <Paragraph>{authError}</Paragraph> : null}
      </SignCard>
    </StyledForm>
  );
};

export default SignIn;
