import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import Header from './components/containers/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route path="/about"></Route>
            <Route path="/users"></Route>
            <Route path="/"></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
