import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../loginController'

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            userName: null,
            password: null
        }

        this.handleUserName = this.handleUserName.bind( this );
        this.handleUserPassword = this.handleUserPassword.bind( this );

    }

    handleUserName ( input ) {
        this.setState( {
            userName: input
        } )
    }

    handleUserPassword ( input ) {
        this.setState( {
            password: input
        } )
    }

    render () {
        return (
            <div>
                <input type='text' placeholder='username' onChange={( event ) => this.handleUserName( event.target.value )} />
                <input type='text' placeholder='password' onChange={( event ) => this.handleUserPassword( event.target.value )} />
                <button onClick={() => this.loginUser( this.state.userName, this.state.password )}>Sign In </button>
                <Link to='/signup'>
                    <button>SignUp</button>
                </Link>
            </div>
        )
    }
}