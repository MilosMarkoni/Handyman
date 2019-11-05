import React, { useState } from 'react';
import { API } from 'aws-amplify';

import { useFormFields } from '../../libs/hooksLib';

import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Growl } from 'primereact/growl';

import LeftMenu from '../Layout/LeftMenu.js/LeftMenu';
import LoaderButton from '../../components/LoaderButton/LoaderButton';

export default function Order() {
  let growl = '';

  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    address: '',
    dateJob: '',
    additionalNotes: '',
  });

  const validateForm = () => true;

  const postData = async dataBody => {
    let apiName = 'putMessage';
    let path = '/';
    let myInit = {
      body: { ...dataBody },
    };
    return await API.post(apiName, path, myInit);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    setIsLoading(true);

    try {
      console.log(fields);
      setIsLoading(false);

      await postData({ ...fields });
      growl.show({
        severity: 'success',
        summary: 'Success Message',
        detail: 'Order submitted',
      });
    } catch (error) {
      console.info(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Growl ref={el => (growl = el)} />

      <LeftMenu></LeftMenu>
      <div className="center-content-layout">
        <div className="p-grid">
          <div className="p-col-12 p-md-6 p-lg-5">
            <Card>
              <form onSubmit={handleSubmit}>
                <div className="p-grid">
                  <div className="p-col-12">
                    <label>Address</label>
                    <InputText
                      id="address"
                      autoFocus
                      value={fields.address}
                      onChange={handleFieldChange}
                    ></InputText>
                  </div>
                  <div className="p-col-12">
                    <label>Job date</label>
                    <InputText
                      id="dateJob"
                      autoFocus
                      value={fields.dateJob}
                      onChange={handleFieldChange}
                    ></InputText>
                  </div>
                  <div className="p-col-12">
                    <label>Additional notes</label>
                    <InputText
                      id="additionalNotes"
                      autoFocus
                      value={fields.additionalNotes}
                      onChange={handleFieldChange}
                    ></InputText>
                  </div>
                  <div className="p-col-12">
                    <LoaderButton
                      className="submit-button"
                      label="Order"
                      type="submit"
                      isLoading={isLoading}
                      disabled={!validateForm()}
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
