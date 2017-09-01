import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { createUser } from '../loginController';
import './SignUp.css'

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
            <div className='signup_container'>
                <div className='signupPagebuttons_container'>
                    <Link to='/'>
                        <button className='signupPage_login_button'>LOGIN</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='signupPage_button'>SIGN-UP</button>
                    </Link>
                </div>

                <div className='signup_inputboxes'>
                    <input type='text' placeholder='Name' onChange={( event ) => this.handleName( event.target.value )} />
                    <input type='text' placeholder='Username' onChange={( event ) => this.handleUserName( event.target.value )} />
                    <input type='text' placeholder='Email' onChange={( event ) => this.handleEmail( event.target.value )} />
                    <input type='text' placeholder='Password' onChange={( event ) => this.handleUserPassword( event.target.value )} />
                </div>

                <button className='signup_buttonBottom' onClick={() => createUser( this.state.name, this.state.userName, this.state.userEmail, this.state.password )}>SIGN-UP</button>
            </div>
        )
    }
}