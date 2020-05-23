import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import {
  PantryPage,
  ShopListPage,
  SettingsPage,
  ItemPage,
  NewPage,
  SignIn,
  LoadingScreen,
} from '.';
import MainTemplate from '../templates/MainTemplate';
import { store, rrfProps } from '../store/index';
import { routes } from '../routes/index';

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <LoadingScreen />;
  return children;
};

const Root = () => {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <BrowserRouter>
            <MainTemplate>
              <Switch>
                <Route
                  exact
                  path={routes.home}
                  render={() => <Redirect to="/pantry" />}
                />
                <Route exact path={routes.pantry} component={PantryPage} />
                <Route path={routes.pantryitem} component={ItemPage} />
                <Route path={routes.shoplist} component={ShopListPage} />
                <Route path={routes.new} component={NewPage} />
                <Route path={routes.settings} component={SettingsPage} />
                <Route path={routes.signIn} component={SignIn} />
              </Switch>
            </MainTemplate>
          </BrowserRouter>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default Root;

// 1. Sidebar tylko na zalogowaniu
