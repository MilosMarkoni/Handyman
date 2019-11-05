import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { OverlayPanel } from 'primereact/overlaypanel';

import './Header.css';

import Routes from '../../Routes/Routes';
import { Auth } from 'aws-amplify';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    const { isAuthenticated, isAuthenticating, userHasAuthenticated } = this.props;

    const handleLogout = async () => {
      await Auth.signOut();
      userHasAuthenticated(false);
      this.props.history.push('/login');
    };

    const collapseMenu = () =>
      this.setState(prevState => ({
        collapsed: !prevState.collapsed,
      }));
    return (
      !isAuthenticating && (
        <>
          <div
            className={` ui-header-panel  ${this.state.collapsed ? 'collapse' : 'not-collapsed'}`}
          >
            <div className="logo-wrapper">
              <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="img" />
              <div className="headerText">CompanyName</div>

              {this.state.collapsed ? (
                <svg
                  onClick={() => collapseMenu()}
                  className="collapse-menu"
                  width="14"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.778 11.364a1 1 0 01-1.414 1.414L6.536 7.95l-4.829 4.828a1 1 0 01-1.414-1.414L5.12 6.536.293 1.707A1 1 0 011.707.293L6.536 5.12 11.364.293a1 1 0 111.414 1.414L7.95 6.536l4.828 4.828z"
                    fill="#A0AEC0"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => collapseMenu()}
                  className="collapse-menu"
                  width="18"
                  height="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 1a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H1a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H1z"
                    fill="#A0AEC0"
                  />
                </svg>
              )}
            </div>

            {isAuthenticated ? (
              <>
                <nav className="main-navigation">
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

                    <li className="profile-pic desktop" onClick={e => this.op.toggle(e)}>
                      <img src={process.env.PUBLIC_URL + '/girl-pic.jpg'} alt="img" />
                      <a href="#test">Jane Doe</a>
                    </li>
                  </ul>

                  <OverlayPanel className="desktop-view-overlay" ref={el => (this.op = el)}>
                    <ul>
                      <li>
                        <Link to="/">Account</Link>
                      </li>
                      <li>
                        <Link to="/order">Settings</Link>
                      </li>
                      <li>
                        <div className="logout-button" onClick={() => handleLogout()}>
                          Sign out
                        </div>
                      </li>
                    </ul>
                  </OverlayPanel>
                </nav>

                <nav className="secondary-navigation">
                  <ul>
                    <li className="profile-pic">
                      <img src={process.env.PUBLIC_URL + '/girl-pic.jpg'} alt="img" />
                      <a href="#test">Jane Doe</a>
                    </li>
                    <li>
                      <Link to="/">Account</Link>
                    </li>
                    <li>
                      <Link to="/order">Settings</Link>
                    </li>
                    <li>
                      <div className="logout-button" onClick={() => handleLogout()}>
                        Sign out
                      </div>
                    </li>
                  </ul>
                </nav>
              </>
            ) : (
              <>
                <nav>
                  <ul>
                    <li>
                      <Link to="/signup">Sign up</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </nav>
              </>
            )}
            <p className="clear"></p>
          </div>
          <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
        </>
      )
    );
  }
}

export default withRouter(Header);
