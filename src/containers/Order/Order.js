import React, { Component } from 'react';

import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';

export default class Order extends Component {
  render() {
    return (
      <Panel>
        <div className="p-grid">
          <div className="p-col-12 p-md-6 p-lg-3">
            <span className="p-float-label">
              <InputText id="in" />
              <label htmlFor="in">Username</label>
            </span>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            {' '}
            <span className="p-float-label">
              <InputText id="in" />
              <label htmlFor="in">Username</label>
            </span>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            {' '}
            <span className="p-float-label">
              <InputText id="in" />
              <label htmlFor="in">Username</label>
            </span>
          </div>
          <div className="p-col-12 p-md-6 p-lg-3">
            {' '}
            <span className="p-float-label">
              <InputText id="in" />
              <label htmlFor="in">Username</label>
            </span>
          </div>
        </div>
      </Panel>
    );
  }
}
