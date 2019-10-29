import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MyProfile from '../containers/MyProfile/MyProfile';
import Order from '../containers/Order/Order';
import Pricing from '../containers/Pricing/Pricing';
import Login from '../containers/Login/Login';
import PageNotFound from '../containers/PageNotFound/PageNotFound';
import AppliedRoute from '../components/AppliedRoute/AppliedRoute';

function Routes({ appProps }) {
  return (
    <Switch>
      <AppliedRoute exact path="/" component={MyProfile} appProps={appProps} />
      <AppliedRoute path="/order" component={Order} appProps={appProps} />
      <AppliedRoute path="/pricing" component={Pricing} appProps={appProps} />
      <AppliedRoute path="/login" exact component={Login} appProps={appProps} />

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
