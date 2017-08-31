import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={SignUp} />
    </Switch>
)