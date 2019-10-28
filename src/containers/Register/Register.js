import React, { Component } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';

import './Register.css';

export default class Login extends Component {
  render() {
    return (
      <div>
        <div className="p-grid p-align-center p-justify-center p-dir-col">
          <div className="p-col-4">
            <InputText placeholder="First name" />
          </div>
          <div className="p-col-4">
            <InputText placeholder="Last name" />
          </div>{' '}
          <div className="p-col-4">
            <InputText placeholder="Email" keyfilter="email" />
          </div>
          <div className="p-col-4">
            <Password placeholder="Password"></Password>
          </div>
          <div className="p-col-4 p-justify-end">
            <Button label="Register" className=" p-button-success"></Button>
          </div>
        </div>
      </div>
    );
  }
}
