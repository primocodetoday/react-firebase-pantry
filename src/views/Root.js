import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PantryPage from './PantryPage';
import ShopListPage from './ShopListPage';
import SettingsPage from './SettingsPage';
import MainTemplate from '../templates/MainTemplate';
import { store } from '../store';
import ItemPage from './ItemPage';
import { routes } from '../routes/index';

function Root() {
  // eslint-disable-next-line no-unused-vars
  const [pantry, setPantry] = useState(store);

  return (
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route
            exact
            path={routes.home}
            render={() => <Redirect to="/pantry" />}
          />
          <Route
            exact
            path={routes.pantry}
            component={() => <PantryPage store={pantry} />}
          />
          <Route
            path={routes.pantryitem}
            component={() => <ItemPage store={pantry} />}
          />
          <Route path={routes.shoplist} component={ShopListPage} />
          <Route path={routes.settings} component={SettingsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default Root;

// 1. Sidebar tylko na zalogowaniu
