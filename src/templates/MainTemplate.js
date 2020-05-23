import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GlobalStyles from '../theme/GlobalStyles';
import { theme } from '../theme/mainTheme';
import SignIn from '../views/SignIn';

const MainTemplate = ({ children, auth }) => {
  const validate = () => {
    if (!auth.uid) return <SignIn />;
    return children;
  };
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{validate}</ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(MainTemplate);
