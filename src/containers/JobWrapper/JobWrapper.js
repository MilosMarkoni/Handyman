import React from 'react';
import { Card } from 'primereact/card';
import './JobWrapper.css';

import { getTimeAndData } from '../../utils/utils';

function JobWrapper(props) {
  const jobs = props.data.map(elem => (
    <div key={elem.orderId} className="p-col-12 p-md-6 p-lg-4">
      <Card className="relative no-body-padding">
        <div className="price-wrapper">$4000</div>
        <div className="job-time-sheduled">{getTimeAndData(elem.timeOfJob)}</div>
        <i
          title={elem.jobStatus ? 'Done' : 'Pending'}
          className={`absolute top-right pi ${
            elem.jobStatus ? 'pi-check status-done' : 'pi-pause status-pending'
          } `}
          style={{ fontSize: '3em' }}
        ></i>

        <div className="job-description">
          <div className="address-wrapper">{elem.address}</div>
          <div className="additional-notes-wrapper">{elem.additionalNotes}</div>
        </div>
      </Card>
    </div>
  ));

  return (
    <div className="p-grid" style={{ marginTop: '0' }}>
      {jobs}
    </div>
  );
}

export default JobWrapper;
