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
        <Panel className="ui-header-panel p-menubar">
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
            <Button label="Logout" icon="pi pi-power-off" style={{ marginLeft: 4 }} />
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
        </Switch>
      </Router>
    );
  }
}

export default Header;

// const items: [
//   {
//       label: 'Options',
//       items: [{label: 'New', icon: 'pi pi-fw pi-plus',command:()=>{ window.location.hash="/fileupload"; }},
//               {label: 'Delete', icon: 'pi pi-fw pi-trash', url: 'http://primetek.com.tr'}]
//   },
//   {
//       label: 'Account',
//       items: [{label: 'Options', icon: 'pi pi-fw pi-cog',command:()=>{ window.location.hash="/"; }},
//               {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
//   }
// ]
