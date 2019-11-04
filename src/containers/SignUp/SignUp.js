import React, { useState } from 'react';

import { useFormFields } from '../../libs/hooksLib';
import { InputText } from 'primereact/inputtext';
import LoaderButton from '../../components/LoaderButton/LoaderButton';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import { Auth } from 'aws-amplify';

import { Link } from 'react-router-dom';

import './SignUp.css';

function SignUp(props) {
  const [fields, handleFieldChange] = useFormFields({
    email: '',
    password: '',
    confirmPassword: '',
    confirmationCode: '',
  });
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  const validateForm = () =>
    fields.email.length > 0 &&
    fields.password.length > 0 &&
    fields.password === fields.confirmPassword;

  const validateConfirmationForm = () => fields.confirmationCode.length > 0;

  const handleSubmit = async event => {
    event.preventDefault();

    setisLoading(true);

    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      });

      setisLoading(false);
      setNewUser(newUser);
    } catch (e) {
      alert(e.message);
      setisLoading(false);
    }
  };

  const handleConfirmationSubmit = async event => {
    event.preventDefault();
    setisLoading(true);

    try {
      await Auth.confirmSignUp(fields.email, fields.confirmationCode);
      await Auth.signIn(fields.email, fields.password);

      props.userHasAuthenticated(true);
      props.history.push('/');
    } catch (e) {
      alert(e.message);
      setisLoading(false);
    }
  };

  const loginHeader = (
    <div>
      <div className="header-text">Create an account</div>
      <div className="sub-header-text">
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </div>
  );

  const renderForm = () => (
    <div className="form-wrapper">
      <Card header={loginHeader}>
        <form onSubmit={handleSubmit}>
          <label>E-mail</label>
          <InputText
            autoComplete="new-email"
            onChange={handleFieldChange}
            value={fields.email}
            id="email"
          ></InputText>

          <label>Password</label>
          <Password
            autoComplete="new-password"
            onChange={handleFieldChange}
            value={fields.password}
            id="password"
          ></Password>

          <label>Confirm password</label>
          <Password
            feedback={false}
            onChange={handleFieldChange}
            value={fields.confirmPassword}
            id="confirmPassword"
          ></Password>

          <LoaderButton
            label="Sign up"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
          ></LoaderButton>
        </form>
      </Card>
    </div>
  );

  const renderConfirmationForm = () => (
    <div className="form-wrapper">
      <Card>
        <form onSubmit={handleConfirmationSubmit}>
          <label>Confirmation code</label>
          <InputText
            onChange={handleFieldChange}
            value={fields.confirmationCode}
            id="confirmationCode"
            placeholder=""
          ></InputText>
          <LoaderButton
            label="Verify"
            type="submit"
            isLoading={isLoading}
            disabled={!validateConfirmationForm()}
          ></LoaderButton>
        </form>
      </Card>
    </div>
  );

  return <div>{newUser === null ? renderForm() : renderConfirmationForm()}</div>;
}

export default SignUp;
