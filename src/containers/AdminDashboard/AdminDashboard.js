import React, { Component } from 'react';
import LeftMenu from '../Layout/LeftMenu/LeftMenu';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { InputSwitch } from 'primereact/inputswitch';
import { Growl } from 'primereact/growl';

import { getTimeAndData } from '../../utils/utils';

import { API } from 'aws-amplify';

class AdminDashboard extends Component {
  constructor() {
    super();
    this.state = {
      jobs: [
        // {
        //   orderId: '11c83050-a652-457e-b4af-31f632816ds05',
        //   address: 'Tailwind Street',
        //   jobStatus: false,
        //   timeOfJob: '2019-11-15T15:04:58.000Z',
        //   additionalNotes: 'Bring wrench and screwdriver.',
        // },
        // {
        //   orderId: 'b14cb428-6eb0-4745-9b1f-8ef31582csb93',
        //   address: 'John Wailard 23',
        //   jobStatus: true,
        //   timeOfJob: '2019-11-15T15:04:58.000Z',
        //   additionalNotes: 'Only after work hours.',
        // },
        // {
        //   orderId: 'b14cb428-6eb0-4745-9b1f-8ef31582acb93',
        //   address: 'John Wailard 23',
        //   jobStatus: true,
        //   timeOfJob: '2019-11-15T15:04:58.000Z',
        //   additionalNotes: 'Only after work hours.',
        // },
        // {
        //   orderId: 'b14cb428-6eb0-4745-9b1f-8ef31d582cb93',
        //   address: 'John Wailard 23',
        //   jobStatus: false,
        //   timeOfJob: '2019-11-15T15:04:58.000Z',
        //   additionalNotes: 'Only after work hours.',
        // },
      ],
    };
    // this.carservice = new CarService();
    this.save = this.save.bind(this);
    this.onCarSelect = this.onCarSelect.bind(this);
    this.addNew = this.addNew.bind(this);
    this.jobStatusTemplate = this.jobStatusTemplate.bind(this);
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
    const fetchedJobs = await this.getData();
    this.setState({ jobs: fetchedJobs });
  };

  updateOrder = async ({ orderId, address, timeOfJob, additionalNotes, jobStatus }) => {
    try {
      let apiName = 'updateOrder';
      let path = '/';
      let myInit = {
        body: {
          orderId,
          address,
          timeOfJob,
          additionalNotes,
          jobStatus,
        },
      };
      await API.post(apiName, path, myInit);
      this.growl.show({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Order submitted',
      });
    } catch (error) {
      console.info(error);
    }
  };

  save = async () => {
    let jobs = [...this.state.jobs];
    if (this.newJob) jobs.push(this.state.job);
    else jobs[this.findSelectedCarIndex()] = this.state.job;

    await this.updateOrder(this.state.job);
    this.setState({ jobs: jobs, selectedCar: null, job: null, displayDialog: false });
  };

  findSelectedCarIndex() {
    return this.state.jobs.indexOf(this.state.selectedCar);
  }

  updateProperty(property, value) {
    let job = this.state.job;
    job[property] = value;
    this.setState({ job: job });
  }

  onCarSelect(e) {
    this.newJob = false;
    this.setState({
      displayDialog: true,
      job: Object.assign({}, e.data),
    });
  }

  addNew() {
    console.log('implement addNew method');
    // this.newCar = true;
    // this.setState({
    //   car: { vin: '', year: '', brand: '', color: '' },
    //   displayDialog: true,
    // });
  }

  jobStatusTemplate(rowData, column) {
    return <span>{rowData.jobStatus ? 'Done' : 'Pending'}</span>;
  }

  render() {
    const dialogFooter = (
      <div className="ui-dialog-buttonpane p-clearfix">
        <Button label="Save" icon="pi pi-check" onClick={this.save} />
      </div>
    );

    return (
      <>
        <Growl ref={el => (this.growl = el)} />
        <LeftMenu></LeftMenu>
        <div className="center-content-layout">
          <div className="content-section implementation">
            <DataTable
              responsive={true}
              value={this.state.jobs}
              paginator={true}
              rows={15}
              selectionMode="single"
              selection={this.state.selectedCar}
              onSelectionChange={e => this.setState({ selectedCar: e.value })}
              onRowSelect={this.onCarSelect}
            >
              <Column field="address" header="Address" sortable={true} />
              <Column
                field="jobStatus"
                header="Status"
                body={this.jobStatusTemplate}
                sortable={true}
              />
              <Column
                field="timeOfJob"
                header="Time"
                sortable={true}
                body={(rowData, column) => <span>{getTimeAndData(rowData.timeOfJob)}</span>}
              />
              <Column field="additionalNotes" header="Notes" sortable={true} />
            </DataTable>

            <Dialog
              visible={this.state.displayDialog}
              width="300px"
              header="Job Details"
              modal={true}
              footer={dialogFooter}
              onHide={() => this.setState({ displayDialog: false })}
            >
              {this.state.job && (
                <div className="p-grid p-fluid">
                  <div className="p-col-12 p-md-6 p-lg-6">
                    <label htmlFor="address">Address</label>
                    <InputText
                      id="address"
                      onChange={e => {
                        this.updateProperty('address', e.target.value);
                      }}
                      value={this.state.job.address}
                    />
                  </div>

                  <div className="p-col-12 p-md-6 p-lg-6" style={{ padding: '.75em' }}>
                    <label htmlFor="jobStatus">Status</label>
                    <InputSwitch
                      className="block"
                      id="jobStatus"
                      checked={this.state.job.jobStatus}
                      onChange={e => {
                        this.updateProperty('jobStatus', e.target.value);
                      }}
                    />
                  </div>

                  <div className="p-col-12" style={{ padding: '.75em' }}>
                    <label htmlFor="timeOfJob">Time of job</label>

                    <Calendar
                      id="timeOfJob"
                      showTime={true}
                      readOnlyInput={true}
                      hourFormat="24"
                      value={[new Date(this.state.job.timeOfJob)]}
                      onChange={e => {
                        this.updateProperty('timeOfJob', e.target.value.toString());
                      }}
                      showButtonBar={true}
                    ></Calendar>
                    {/* 
                    <InputText
                      id="timeOfJob"
                      onChange={e => {
                        this.updateProperty('timeOfJob', e.target.value);
                      }}
                      value={this.state.car.timeOfJob}
                    /> */}
                  </div>

                  <div className="p-col-12" style={{ padding: '.75em' }}>
                    <label htmlFor="additionalNotes">Additional notes</label>
                    <InputText
                      id="additionalNotes"
                      onChange={e => {
                        this.updateProperty('additionalNotes', e.target.value);
                      }}
                      value={this.state.job.additionalNotes}
                    />
                  </div>
                </div>
              )}
            </Dialog>
          </div>
        </div>
      </>
    );
  }
}

export default AdminDashboard;
