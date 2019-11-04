import React, { Component } from 'react';

import { InputText } from 'primereact/inputtext';

import LeftMenu from '../Layout/LeftMenu.js/LeftMenu';

export default class Order extends Component {
  render() {
    return (
      <>
        <LeftMenu></LeftMenu>
        <div className="center-content-layout">
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
        </div>
      </>
    );
  }
}
