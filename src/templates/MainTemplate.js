import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GlobalStyles from '../theme/GlobalStyles';
import { theme } from '../theme/mainTheme';

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(MainTemplate);
