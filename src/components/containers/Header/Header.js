import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Header.css';

import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import MyProfile from '../MyProfile/MyProfile';
import Order from '../Order/Order';
import Pricing from '../Pricing/Pricing';
import Login from '../Login/Login';

class Header extends Component {
  render() {
    return (
      <Router className="content-section implementation">
        <Panel className="ui-header-panel p-menubar">
          <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="img" />
          <nav>
            <ul>
              <li>
                <Link to="/">My profile</Link>
              </li>
              <li>
                <Link to="/order">Order</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </nav>
          <div className="p-menubar-custom">
            <InputText placeholder="Search" type="text" />

            <Link to="/login">
              <Button label="Logout" icon="pi pi-power-off" style={{ marginLeft: 4 }} />
            </Link>
          </div>

          <p className="clear"></p>
        </Panel>
        <Switch>
          <Route exact path="/">
            <MyProfile />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Header;
