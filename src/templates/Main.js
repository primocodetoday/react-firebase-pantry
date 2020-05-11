import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyles from '../theme/GlobalStyles';
import { theme } from '../theme/mainTheme';

const Main = ({ children }) => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
