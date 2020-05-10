import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/organisms/Header';
import GlobalStyles from '../theme/GlobalStyles';
import Main from '../templates/Main';
import { theme } from '../theme/mainTheme';

const Wrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  background-color: #123c69;
  color: white;
  min-height: 100vh;
`;

function Root() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />
          <Main />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default Root;
