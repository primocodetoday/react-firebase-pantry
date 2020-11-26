import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { ROUTES } from 'routes';
import { MainTemplate } from 'templates';
import LoadingScreen from 'molecules/LoadingScreen/LoadingScreen';
import PrivateRoute from 'hoc/PrivateRoute';
import * as Views from 'views';
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
                <Route exact path={ROUTES.HOME} render={() => <Redirect to={ROUTES.PANTRY} />} />
                <PrivateRoute exact path={ROUTES.PANTRY} component={Views.Pantry} />
                <PrivateRoute path={ROUTES.PANTRY_ITEM} component={Views.ItemPage} />
                <PrivateRoute path={ROUTES.SHOPLIST} component={Views.ShopListPage} />
                <PrivateRoute path={ROUTES.NEW} component={Views.NewItem} />
                <PrivateRoute path={ROUTES.SETTINGS} component={Views.SettingsPage} />
                <Route path={ROUTES.SIGNIN} component={Views.SignIn} />
                <Route path={ROUTES.SIGNUP} component={Views.SignUp} />
              </Switch>
            </MainTemplate>
          </BrowserRouter>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default Root;
