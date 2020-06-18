import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="text-center">

            {/* Header + Background */}
            <div id="background"></div>
            <span id="title" className="lead"><a href="/">Converso</a></span>

            {/* Login Form */}
            <div id="loginBox">
                <h6 className="display-4">Login</h6>
                <form>
                    <div className="inputBox">
                        <input  type="email" autoComplete="off" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    
                    <div className="inputBox">
                        <input  type="password" autoComplete="off" required />
                        <label htmlFor="password">Password</label>
                    </div>

                    <button>Login</button>
                </form>
                <div className="linkContainer">
                    <Link className="simpleLink" to="/register">Do not have an account yet?</Link>
                    <br />
                    <Link className="simpleLink" to="/forgetpassword">Forgot your password ?</Link>
                </div>
            </div>

        </div>   
    )
}

export default Login
