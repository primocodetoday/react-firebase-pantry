import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Logo, Paragraph, SignCard } from 'atoms';
import { signIn } from 'redux/actions/authActions';
import { ROUTES } from 'routes';
import { StyledForm, StyledInput, StyledItemBar, ButtonWrapper, SignButton } from './SignIn.styles';

const SignIn = () => {
  const [formState, setFormState] = React.useState({ email: '', password: '' });

  const history = useHistory();
  const dispatch = useDispatch();

  const authError = useSelector((state) => state.auth.authError);
  const auth = useSelector((state) => state.firebase.auth);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  React.useEffect(() => {
    if (!auth.isEmpty) history.push(ROUTES.PANTRY);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(formState));
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
          To create a account click <Link to={ROUTES.SIGNUP}>here</Link>
        </Paragraph>

        {authError ? <Paragraph>{authError}</Paragraph> : null}
      </SignCard>
    </StyledForm>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     authError: state.auth.authError,
//     auth: state.firebase.auth,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signIn: (creds) => dispatch(signInAction(creds)),
//   };
// };

export default SignIn;
