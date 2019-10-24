import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Header.css';

import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import MyProfile from '../MyProfile/MyProfile';
import Order from '../Order/Order';
import Pricing from '../Pricing/Pricing';

class Header extends Component {
  render() {
    return (
      <Router className="content-section implementation">
        <Panel>
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

          <InputText placeholder="Search" type="text" />
          <Button label="Logout" icon="pi pi-power-off" style={{ marginLeft: 4 }} />
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
        </Switch>
      </Router>
    );
  }
}

export default Header;
