import React, { Component } from 'react';

import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

import './MyProfile.css';
import LeftMenu from '../Layout/LeftMenu.js/LeftMenu';

export default class MyProfile extends Component {
  render() {
    const data = {
      labels: ['Spent', 'Credit'],
      datasets: [
        {
          data: [29, 75],
          backgroundColor: ['#FF6384', '#36A2EB'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        },
      ],
    };

    return (
      <div>
        <LeftMenu></LeftMenu>
        <div className="center-content-layout">
          <div className="p-grid">
            <div className="p-col-12 p-md-12 p-lg-7">
              <Card>
                <Chart type="doughnut" data={data} />
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
