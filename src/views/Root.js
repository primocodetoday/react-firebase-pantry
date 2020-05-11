import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pantry from './Pantry';
import ShopList from './ShopList';
import Settings from './Settings';
import UserPage from '../templates/UserPage';
import Main from '../templates/Main';
import { store } from '../store';

function Root() {
  // eslint-disable-next-line no-unused-vars
  const [pantry, setPantry] = useState(store);

  return (
    <BrowserRouter>
      <Main>
        <UserPage>
          <Switch>
            <Route exact path="/" component={() => <Pantry store={pantry} />} />
            <Route path="/shoplist" component={ShopList} />
            <Route path="/settings" component={Settings} />
          </Switch>
        </UserPage>
      </Main>
    </BrowserRouter>
  );
}

export default Root;

// 1. Sidebar tylko na zalogowaniu
