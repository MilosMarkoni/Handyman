import React, { Component } from 'react';

import { Card } from 'primereact/card';
import { TabView, TabPanel } from 'primereact/tabview';
import { Chart } from 'primereact/chart';

import './MyProfile.css';

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
        <Card>
          <Chart type="doughnut" data={data} />
        </Card>
        <Card>
          <Chart type="doughnut" data={data} />
        </Card>
        <Card>
          <Chart type="doughnut" data={data} />
        </Card>

        <TabView>
          <TabPanel header="Header I">Content I</TabPanel>
          <TabPanel header="Header II">Content II</TabPanel>
          <TabPanel header="Header III">Content III</TabPanel>
        </TabView>
      </div>
    );
  }
}
