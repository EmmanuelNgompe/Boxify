import React from 'react';
import Boxify from '../images/Boxify.png';
import fond from '../images/fond.png';
import '../style/log.css';
import google from '../images/google.png';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Handle login logic here
        navigate('/dashboard');
    };

    return (
        <div className="login-container">
            <div className='fond-container'>
                <img src={fond} alt="Fond d'écran" className='fond'/>
            </div>
            <form className='form' onSubmit={handleLogin} method="POST">
                <img src={Boxify} alt="Boxify Logo" className='logo'/>
                <h2>Welcome to Boxify</h2>
                    <div className='google-container'><img src={google} alt="Google Logo" className='google'/> Continuer avec google</div>
                    <p className='ou'>──────────  ou  ──────────</p>
                    <label htmlFor="email">E-mail</label>
                    <br/>
                    <input type="text" id='email' placeholder="Enter your e-mail"className='input' /*required/*//>
                    <br />
                    <label htmlFor="password">Password</label>
                    <br/>
                    <input type="password" id='password' placeholder="Enter your password" className='input' /*required*//>
                   <br />
                    <div className='sign-in'>
                        <p>Don't have an account?</p> <a href="/register" className='register'><strong>Register</strong></a>
                        </div>
                        <input type="submit" className='login-button' value='Login'/>
                        <div className='sign-in'>
                        <p>Forgot your password?</p> <a href="/forgot-password" className='register'><strong>Reset Password</strong></a>
                    </div>
                </form>
            </div>
        );
    }

    export default Login;