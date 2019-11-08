import React, { Component } from 'react';

import { API } from 'aws-amplify';

import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Growl } from 'primereact/growl';
import { Calendar } from 'primereact/calendar';

import LeftMenu from '../Layout/LeftMenu/LeftMenu';
import LoaderButton from '../../components/LoaderButton/LoaderButton';

class Order extends Component {
  constructor(props) {
    super(props);

    this.growl = '';
    this.state = {
      timeOfJob: '',
      isLoading: false,
      address: '',
      additionalNotes: '',
      jobStatus: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  postData = async ({ address, timeOfJob, additionalNotes, jobStatus }) => {
    try {
      let apiName = 'putOrder';
      let path = '/';
      let myInit = {
        body: {
          address,
          timeOfJob,
          additionalNotes,
          jobStatus,
        },
      };
      await API.post(apiName, path, myInit);
    } catch (error) {
      console.info(error);
    }
  };

  handleLoadingState = currentState => this.setState(() => ({ isLoading: currentState }));

  handleSubmit = async event => {
    event.preventDefault();

    this.handleLoadingState(true);
    try {
      this.handleLoadingState(false);

      await this.postData(this.state);
      this.growl.show({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Order submitted',
      });
    } catch (error) {
      console.info(error);
      this.handleLoadingState(false);
    }
  };

  handleChange = event => this.setState({ [event.target.id]: event.target.value });

  validateForm = () => true;

  render() {
    return (
      <>
        <Growl ref={el => (this.growl = el)} />
        <LeftMenu></LeftMenu>
        <div className="center-content-layout">
          <div className="p-grid">
            <div className="p-col-12 p-md-6 p-lg-5">
              <Card header="Order now">
                <form onSubmit={this.handleSubmit}>
                  <div className="p-grid">
                    <div className="p-col-12">
                      <label>Address</label>
                      <InputText
                        id="address"
                        autoFocus
                        value={this.state.address}
                        onChange={this.handleChange}
                      ></InputText>
                    </div>
                    <div className="p-col-12">
                      <label>Additional notes</label>
                      <InputText
                        id="additionalNotes"
                        autoFocus
                        name="additionalNotes"
                        value={this.state.additionalNotes}
                        onChange={this.handleChange}
                      ></InputText>
                    </div>
                    <div className="p-col-12">
                      <label>Time of job:</label>
                      <Calendar
                        id="timeOfJob"
                        showTime={true}
                        hourFormat="24"
                        value={this.state.timeOfJob}
                        onChange={this.handleChange}
                        showButtonBar={true}
                      ></Calendar>
                    </div>

                    <div className="p-col-12">
                      <LoaderButton
                        className="submit-button"
                        label="Order"
                        type="submit"
                        isLoading={this.state.isLoading}
                        disabled={!this.validateForm()}
                      ></LoaderButton>
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

export default Order;
