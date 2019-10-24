import React, { Component } from 'react';
import './Header.css';

import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

class Header extends Component {
  render() {
    return (
      <div className="content-section implementation">
        <Panel>
          <nav>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>

          <InputText placeholder="Search" type="text" />
          <Button label="Logout" icon="pi pi-power-off" style={{ marginLeft: 4 }} />
        </Panel>
      </div>
    );
  }
}

export default Header;
