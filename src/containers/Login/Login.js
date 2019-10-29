import React, { useState } from 'react';

import { Auth } from 'aws-amplify';

import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => email.length > 0 && password.length > 0;
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      props.userHasAuthenticated(true);
    } catch (error) {
      console.info(error);
    }
  };
  return (
    <div className="p-grid ui-login-panel p-align-center p-justify-center p-dir-col">
      <form onSubmit={handleSubmit}>
        <div className="p-col-4">
          <InputText
            autoFocus
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="p-col-4">
          <Password
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Password>
        </div>
        <div className="p-col-4 p-justify-end">
          <Button label="Login" disabled={!validateForm()} type="submit" className="float"></Button>
        </div>
      </form>
    </div>
  );
}
