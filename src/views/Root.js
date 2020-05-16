import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PantryPage, ShopListPage, SettingsPage, ItemPage, NewPage } from '.';
import MainTemplate from '../templates/MainTemplate';
import store from '../store/index';
import { routes } from '../routes/index';

function Root() {
  // eslint-disable-next-line no-unused-vars
  const [pantry, setPantry] = useState(store);

  return (
    <Provider store={store}>
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
              component={() => <PantryPage />}
            />
            <Route path={routes.pantryitem} component={() => <ItemPage />} />
            <Route path={routes.shoplist} component={ShopListPage} />
            <Route path={routes.new} component={NewPage} />
            <Route path={routes.settings} component={SettingsPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;

// 1. Sidebar tylko na zalogowaniu
