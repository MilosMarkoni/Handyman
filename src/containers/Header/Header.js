import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import Routes from '../../Routes/Routes';
import { Auth } from 'aws-amplify';

class Header extends Component {
  render() {
    const { isAuthenticated, isAuthenticating, userHasAuthenticated } = this.props;

    const handleLogout = async () => {
      await Auth.signOut();

      userHasAuthenticated(false);
    };
    return (
      !isAuthenticating && (
        <div>
          <Panel className="ui-header-panel p-menubar">
            <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="img" />
            {isAuthenticated ? (
              <>
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

                  <Button
                    label="Logout"
                    onClick={() => handleLogout()}
                    icon="pi pi-power-off"
                    style={{ marginLeft: 4 }}
                  />
                </div>
              </>
            ) : (
              <></>
            )}
            <p className="clear"></p>
          </Panel>
          <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        </div>
      )
    );
  }
}

export default Header;
