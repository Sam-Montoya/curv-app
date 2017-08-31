import React, { Component } from 'react';
import './App.css';

import Login from './components/Login';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render () {
    return (
      //Need routers
      <div>
        <Login />
      </div>
    );
  }
}

export default App;
