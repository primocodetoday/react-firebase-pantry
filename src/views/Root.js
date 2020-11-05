import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { ReactReduxFirebaseProvider, isLoaded } from 'react-redux-firebase';
import { routes } from 'routes';
import { store, rrfProps } from 'store';
import { MainTemplate } from 'templates';
import LoadingScreen from 'helpers/LoadingScreen';
import PrivateRoute from 'helpers/PrivateRoute';
// Lazy loading views
const SignUp = React.lazy(() => import('views/SignUp/SignUp'));
const SignIn = React.lazy(() => import('views/SignIn/SignIn'));
const SettingsPage = React.lazy(() => import('views/SettingsPage/SettingsPage'));
const PantryPage = React.lazy(() => import('views/PantryPage/PantryPage'));
const ShopListPage = React.lazy(() => import('views/ShopListPage/ShopListPage'));
const ItemPage = React.lazy(() => import('views/ItemPage/ItemPage'));
const NewPage = React.lazy(() => import('views/NewPage/NewPage'));

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
                <React.Suspense fallback={<LoadingScreen />}>
                  <Route exact path={routes.home} render={() => <Redirect to="/pantry" />} />
                  <PrivateRoute exact path={routes.pantry} component={PantryPage} />
                  <PrivateRoute path={routes.pantryitem} component={ItemPage} />
                  <PrivateRoute path={routes.shoplist} component={ShopListPage} />
                  <PrivateRoute path={routes.new} component={NewPage} />
                  <PrivateRoute path={routes.settings} component={SettingsPage} />
                  <Route path={routes.signIn} component={SignIn} />
                  <Route path={routes.signUp} component={SignUp} />
                </React.Suspense>
              </Switch>
            </MainTemplate>
          </BrowserRouter>
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

export default Root;
