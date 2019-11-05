import React, { Component } from 'react';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import LeftMenu from '../Layout/LeftMenu.js/LeftMenu';

export default class Order extends Component {
  render() {
    return (
      <>
        <LeftMenu></LeftMenu>
        <div className="center-content-layout">
          <div className="p-grid">
            <div className="p-col-12 p-md-6 p-lg-5">
              <Card>
                <form>
                  <div className="p-grid">
                    <div className="p-col-12 p-md-6 p-lg-6">
                      <label>First name</label>
                      <InputText></InputText>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-6">
                      <label>Last name </label>
                      <InputText></InputText>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-6">
                      <label>First name</label>
                      <InputText></InputText>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-6">
                      <label>First name</label>
                      <InputText></InputText>
                    </div>
                    <div className="p-col-12">
                      <Button label="ajmo button" className="submit-button"></Button>
                    </div>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}
