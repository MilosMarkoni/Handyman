import React, { Component } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import './MyProfile.css';
import LeftMenu from '../Layout/LeftMenu.js/LeftMenu';

export default class MyProfile extends Component {
  render() {
    return (
      <>
        <LeftMenu></LeftMenu>
        <div className="center-content-layout">
          <div className="p-grid">
            <div className="p-col-12 p-md-9 p-lg-5">
              <Card className="ui-position__relative personal-info-card">
                <form>
                  <img
                    src={process.env.PUBLIC_URL + '/girl-pic.jpg'}
                    alt="img"
                    className="profile-pic-card"
                  />
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
                      <label>E-mail</label>
                      <InputText></InputText>
                    </div>
                    <div className="p-col-12 p-md-6 p-lg-6">
                      <label>Address</label>
                      <InputText></InputText>
                    </div>
                    <div className="p-col-12">
                      <Button label="Update info" className="submit-button"></Button>
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
