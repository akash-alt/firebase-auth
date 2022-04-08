
import React from 'react';
import "./login.css";
import InputControl from '../inputcontrol/InputControl';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container'>
            <div className='innerbox'>
                <h1 className='header'>Login</h1>
                <InputControl label="Email" placeholder='Enter your Email ' />
                <InputControl label="Password" placeholder='Enter your password' />

                <div className='footer'>
                    <button>Login</button>
                    <p>Already Have account ? <span>
                        <Link to='/signup'>Sign up</Link></span></p>

                </div>
            </div>
        </div>
    )
}

export default Login;