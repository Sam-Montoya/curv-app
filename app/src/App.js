import React, {Component} from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

class App extends Component {
  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <div className='container'>
        <img className='backgroundImage' 
        src='https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/GbbtDTW/dramatic-dark-rainy-storm-clouds-over-gloomy-city-of-los-angeles-skyline-4k-uhd-timelapse_rqswghy__F0004.png'/>
        <section className='logo'>
          <img className='logo' alt=''/>
        </section>
        <div className='userInfo'>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/signup' component={SignUp}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
