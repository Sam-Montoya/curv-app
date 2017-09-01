import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../loginController'
import './Login.css';

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
            <div className='login_container'>
                <section className='loginPagebutton_container'>
                    <button className='login_button'>LOGIN</button>
                    <Link to='/signup'>
                        <button className='signup_button'>SIGN-UP
                        </button>
                    </Link>
                </section>
                <div className='login_inputboxes'>
                    <input type='text' placeholder='Username' onChange={( event ) => this.handleUserName( event.target.value )} />
                    <input type='password' placeholder='Password' onChange={( event ) => this.handleUserPassword( event.target.value )} />
                    <button className='login_buttonBottom' onClick={() => loginUser( this.state.userName, this.state.password )}>LOGIN</button>
                    <Link style={{ textDecoration: 'none' }} to='/forgotPassword'>
                        <h5>Forgot Password?</h5>
                    </Link>
                </div>
            </div>
        )
    }
}