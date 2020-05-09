import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../components/organisms/Header';
import GlobalStyles from '../theme/GlobalStyles';
import Main from '../templates/Main';

const theme = {
  primary: '#123c69',
  secondary: '#ac3b61',
};

const Wrapper = styled.div`
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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
          <section>
            Hey. This is my Pantry App…..I did it to practice React..... Click
            the new item to add. Click an item to change. The shopping list is
            automatic, but you can manually add an item
          </section>
          <Main />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default Root;
