import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import Routes from '../../Routes/Routes';

class Header extends Component {
  render() {
    return (
      <div>
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
        <Routes />
      </div>
    );
  }
}

export default Header;
