import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MyProfile from '../containers/MyProfile/MyProfile';
import Order from '../containers/Order/Order';
import Pricing from '../containers/Pricing/Pricing';
import Login from '../containers/Login/Login';
import PageNotFound from '../containers/PageNotFound/PageNotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MyProfile}></Route>
      <Route path="/order" component={Order}></Route>
      <Route path="/pricing" component={Pricing}></Route>
      <Route path="/login" component={Login}></Route>

      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Routes;
