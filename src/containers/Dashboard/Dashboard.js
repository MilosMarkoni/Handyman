import React, { Component } from 'react';
import LeftMenu from '../Layout/LeftMenu/LeftMenu';

import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

import { API } from 'aws-amplify';
import JobWrapper from '../JobWrapper/JobWrapper';

const mockData = [
  {
    orderId: '11c83050-a652-457e-b4af-31f632816ds05',
    address: 'Tailwind Street',
    jobStatus: false,
    timeOfJob: '2019-11-15T15:04:58.000Z',
    additionalNotes: 'Bring wrench and screwdriver.',
  },
  {
    orderId: 'b14cb428-6eb0-4745-9b1f-8ef31582csb93',
    address: 'John Wailard 23',
    jobStatus: true,
    timeOfJob: '2019-11-15T15:04:58.000Z',
    additionalNotes: 'Only after work hours.',
  },
  {
    orderId: 'b14cb428-6eb0-4745-9b1f-8ef31582acb93',
    address: 'John Wailard 23',
    jobStatus: true,
    timeOfJob: '2019-11-15T15:04:58.000Z',
    additionalNotes: 'Only after work hours.',
  },
  {
    orderId: 'b14cb428-6eb0-4745-9b1f-8ef31d582cb93',
    address: 'John Wailard 23',
    jobStatus: false,
    timeOfJob: '2019-11-15T15:04:58.000Z',
    additionalNotes: 'Only after work hours.',
  },
];

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: mockData,
      jobs: [],
    };
  }
  getData = async () => {
    try {
      let apiName = 'getOrders';
      let path = '/';
      let myInit = {
        body: {},
      };
      return await API.get(apiName, path, myInit);
    } catch (error) {
      console.info(error);
    }
  };

  componentDidMount = async () => {
    // const fetchedJobs = await this.getData();
    // this.setState({ jobs: fetchedJobs });
  };

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

    const options = {
      rotation: 0.7 * Math.PI,
      circumference: 1.6 * Math.PI,
    };
    return (
      <>
        <LeftMenu></LeftMenu>
        <div className="center-content-layout">
          <div className="p-grid">
            <div className="p-col-12 p-md-12 p-lg-4">
              <Card>
                <Chart type="doughnut" data={data} options={options} />
              </Card>
            </div>
          </div>

          <JobWrapper data={this.state.data}></JobWrapper>
        </div>
      </>
    );
  }
}

export default Dashboard;
