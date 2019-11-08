import React from 'react';
import { Card } from 'primereact/card';
import './JobWrapper.css';

import { getTimeAndData } from '../../utils/utils';

function JobWrapper(props) {
  const jobs = props.data.map(elem => (
    <div key={elem.orderId} className="p-col-12 p-md-12 p-lg-4">
      <Card className="relative">
        <div className="job-time-sheduled">{getTimeAndData(elem.timeOfJob)}</div>
        <div className="job-status-wrapper" tooltip="test">
          <i
            title={elem.jobStatus ? 'Done' : 'Pending'}
            class={`absolute top-right pi ${
              elem.jobStatus ? 'pi-check status-done' : 'pi-pause status-pending'
            } `}
            style={{ fontSize: '3em' }}
          ></i>
        </div>
        <div className="address-wrapper">{elem.address}</div>
        <div className="additional-notes-wrapper">{elem.additionalNotes}</div>
      </Card>
    </div>
  ));

  return <div className="p-grid">{jobs}</div>;
}

export default JobWrapper;

// "orderId": "11c83050-a652-457e-b4af-31f632816d05",
// "address": "ss",
// "jobStatus": false,
// "timeOfJob": "2019-11-15T15:04:58.000Z",
// "additionalNotes": "ss"
