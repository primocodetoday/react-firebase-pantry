import * as React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'routes';
import { Wrapper } from './SignTemplate.styles';

const SignTemplate = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  const history = useHistory();

  // handle redirect after login
  React.useEffect(() => {
    if (!auth.isEmpty) history.push(ROUTES.PANTRY);
  });

  return <Wrapper>{children}</Wrapper>;
};

export default SignTemplate;
