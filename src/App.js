import React, { Component } from 'react';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';

import Header from './components/containers/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    );
  }
}

export default App;
