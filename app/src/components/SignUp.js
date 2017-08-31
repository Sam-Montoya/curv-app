import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../loginController';

export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            name: null,
            userName: null,
            userEmail: null,
            password: null
        }

        this.handleName = this.handleName.bind( this );
        this.handleUserName = this.handleUserName.bind( this );
        this.handleEmail = this.handleEmail.bind( this );
        this.handleUserPassword = this.handleUserPassword.bind( this );
    }

    handleName ( input ) {
        this.setState( {
            name: input
        } )
    }

    handleUserName ( input ) {
        this.setState( {
            userName: input
        } )
    }

    handleEmail ( input ) {

        this.setState( {
            userEmail: input
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
                <input type='text' placeholder='Name' onChange={( event ) => this.handleName( event.target.value )} />
                <input type='text' placeholder='Username' onChange={( event ) => this.handleUserName( event.target.value )} />
                <input type='text' placeholder='Email' onChange={( event ) => this.handleEmail( event.target.value )} />
                <input type='text' placeholder='Password' onChange={( event ) => this.handleUserPassword( event.target.value )} />
                <button onClick={() => createUser( this.state.name, this.state.userName, this.state.userEmail, this.state.password )}>Sign Up </button>
                <Link to='/'>
                    <button>Log In</button>
                </Link>
            </div>
        )
    }
}