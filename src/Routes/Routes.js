import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MyProfile from '../containers/MyProfile/MyProfile';
import Order from '../containers/Order/Order';
import Pricing from '../containers/Pricing/Pricing';
import Login from '../containers/Login/Login';
import PageNotFound from '../containers/PageNotFound/PageNotFound';
import SignUp from '../containers/SignUp/SignUp';
import DashBoard from '../containers/Dashboard/Dashboard';
import AuthenticatedRoute from '../components/AuthenticatedRoute/AuthenticatedRoute';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute/UnauthenticatedRoute';

function Routes({ appProps }) {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/" component={DashBoard} appProps={appProps} />
      <AuthenticatedRoute exact path="/myprofile" component={MyProfile} appProps={appProps} />
      <AuthenticatedRoute path="/order" component={Order} appProps={appProps} />
      <AuthenticatedRoute path="/pricing" component={Pricing} appProps={appProps} />
      <UnauthenticatedRoute path="/login" exact component={Login} appProps={appProps} />
      <UnauthenticatedRoute path="/signup" exact component={SignUp} appProps={appProps} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
