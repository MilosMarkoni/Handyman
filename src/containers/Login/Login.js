import React, { useState } from 'react';

import { Auth } from 'aws-amplify';

import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { Password } from 'primereact/password';
import LoaderButton from '../../components/LoaderButton/LoaderButton';
import { useFormFields } from '../../libs/hooksLib';
import { Link } from 'react-router-dom';

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

      // force redirect to profile page
      props.history.push('/');
    } catch (error) {
      console.info(error);
      setIsLoading(false);
    }
  };

  const loginHeader = (
    <div>
      <div className="header-text">Log in</div>
      <div className="sub-header-text">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );

  return (
    <div className="form-wrapper">
      <Card header={loginHeader}>
        <form onSubmit={handleSubmit}>
          <label>E-mail</label>

          <InputText
            id="email"
            autoFocus
            value={fields.email}
            placeholder="Email"
            onChange={handleFieldChange}
          />

          <label>Password</label>
          <Password id="password" value={fields.password} onChange={handleFieldChange}></Password>

          <LoaderButton
            label="Log in"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
          ></LoaderButton>
        </form>
      </Card>
    </div>
  );
}
