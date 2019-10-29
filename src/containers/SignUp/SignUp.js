import React, { useState } from 'react';

import { useFormFields } from '../../libs/hooksLib';
import { InputText } from 'primereact/inputtext';
import LoaderButton from '../../components/LoaderButton/LoaderButton';
import { Password } from 'primereact/password';
import { Auth } from 'aws-amplify';

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

  const renderForm = () => (
    <div className="p-grid ui-login-panel p-align-center p-justify-center p-dir-col">
      <form onSubmit={handleSubmit}>
        <div className="p-col-4">
          <InputText
            autoComplete="new-email"
            onChange={handleFieldChange}
            value={fields.email}
            id="email"
            placeholder="email"
          ></InputText>
        </div>
        <div className="p-col-4">
          <Password
            autoComplete="new-password"
            onChange={handleFieldChange}
            value={fields.password}
            id="password"
            placeholder="Confirmation code"
          ></Password>
        </div>
        <div className="p-col-4">
          <Password
            feedback={false}
            onChange={handleFieldChange}
            value={fields.confirmPassword}
            id="confirmPassword"
            placeholder="Confirm password"
          ></Password>
        </div>
        <div className="p-col-4 p-justify-end">
          <LoaderButton
            label="Signup"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
          ></LoaderButton>
        </div>
      </form>
    </div>
  );

  const renderConfirmationForm = () => (
    <div className="p-grid ui-login-panel p-align-center p-justify-center p-dir-col">
      <form onSubmit={handleConfirmationSubmit}>
        <div className="p-col-4">
          <InputText
            onChange={handleFieldChange}
            value={fields.confirmationCode}
            id="confirmationCode"
            placeholder="Confirmation code"
          ></InputText>
        </div>
        <div className="p-col-4 p-justify-end">
          <LoaderButton
            label="Verify"
            type="submit"
            isLoading={isLoading}
            disabled={!validateConfirmationForm()}
          ></LoaderButton>
        </div>
      </form>
    </div>
  );

  return <div>{newUser === null ? renderForm() : renderConfirmationForm()}</div>;
}

export default SignUp;
