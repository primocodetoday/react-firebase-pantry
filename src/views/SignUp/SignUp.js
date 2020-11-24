import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Logo, Paragraph, Button, SignCard } from 'atoms';
import { signUp } from 'redux/actions/authActions';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { StyledForm, StyledInput, StyledItemBar } from './SignUp.styles';

const SignUp = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [formState, setFormState] = React.useState({
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

  React.useEffect(() => {
    if (!auth.isEmpty) history.push(ROUTES.PANTRY);
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(formState));
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

// const mapStateToProps = (state) => {
//   return {
//     authError: state.auth.authError,
//     auth: state.firebase.auth,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     signUp: (newUser) => dispatch(signUpAction(newUser)),
//   };
// };

export default SignUp;
