import React, { Component } from 'react';
import './App.css';

import router from './router';
import Login from './components/Login';
import SignUp from './components/SignUp';

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
        {router}
      </div>
    );
  }
}

export default App;
