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
      <div className='container'>
        <section className='logo'>
          <img className='logo' />
        </section>
        <div className='userInfo'>
          {router}
        </div>
      </div>
    );
  }
}

export default App;
