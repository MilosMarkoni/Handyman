import React, { useState } from 'react';

import { Auth } from 'aws-amplify';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import LoaderButton from '../../components/LoaderButton/LoaderButton';
import { useFormFields } from '../../libs/hooksLib';

export default function Login(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
  });

  const validateForm = () => fields.email.length > 0 && fields.password.length > 0;

  const handleSubmit = async event => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(fields.email, fields.password);
      props.userHasAuthenticated(true);

      props.history.push('/');
    } catch (error) {
      console.info(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="p-grid ui-login-panel p-align-center p-justify-center p-dir-col">
      <form onSubmit={handleSubmit}>
        <div className="p-col-4">
          <InputText
            id="email"
            autoFocus
            value={fields.email}
            placeholder="Email"
            onChange={handleFieldChange}
          />
        </div>

        <div className="p-col-4">
          <Password
            id="password"
            placeholder="Password"
            value={fields.password}
            onChange={handleFieldChange}
          ></Password>
        </div>
        <div className="p-col-4 p-justify-end">
          <LoaderButton
            label="Login"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
          ></LoaderButton>
        </div>
      </form>
    </div>
  );
}
