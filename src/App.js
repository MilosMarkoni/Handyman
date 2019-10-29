import React, { useState, useEffect } from 'react';

import { Auth } from 'aws-amplify';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './App.css';

import Header from './containers/Header/Header';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== 'No current user') console.info('error', e);
    }

    setIsAuthenticating(false);
  }

  return (
    <div>
      <Header
        isAuthenticated={isAuthenticated}
        userHasAuthenticated={userHasAuthenticated}
        isAuthenticating={isAuthenticating}
      ></Header>
    </div>
  );
}

export default App;
