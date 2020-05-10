import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../theme/GlobalStyles';
import Pantry from './Pantry';
import ShopList from './ShopList';
import Settings from './Settings';
import { theme } from '../theme/mainTheme';
import UserPage from '../templates/UserPage';

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
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <UserPage>
            <Switch>
              <Route exact path="/" component={Pantry} />
              <Route path="/shoplist" component={ShopList} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </UserPage>
        </Wrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Root;

// 1. Sidebar tylko na zalogowaniu
