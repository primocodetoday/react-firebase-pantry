import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { ROUTES } from 'routes';
import { MainTemplate } from 'templates';
import LoadingScreen from 'helpers/LoadingScreen';
import PrivateRoute from 'helpers/PrivateRoute';
import { PantryPage, ShopListPage, SettingsPage, ItemPage, NewPage, SignIn, SignUp } from 'views';
import { store, rrfProps } from 'redux/store';

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <LoadingScreen />;
  return children;
};

const Root = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <AuthIsLoaded>
          <BrowserRouter>
            <MainTemplate>
              <Switch>
                <Route exact path={ROUTES.home} render={() => <Redirect to="/pantry" />} />
                <PrivateRoute exact path={ROUTES.pantry} component={PantryPage} />
                <PrivateRoute path={ROUTES.pantryitem} component={ItemPage} />
                <PrivateRoute path={ROUTES.shoplist} component={ShopListPage} />
                <PrivateRoute path={ROUTES.new} component={NewPage} />
                <PrivateRoute path={ROUTES.settings} component={SettingsPage} />
                <Route path={ROUTES.signIn} component={SignIn} />
                <Route path={ROUTES.signUp} component={SignUp} />
              </Switch>
            </MainTemplate>
          </BrowserRouter>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default Root;
