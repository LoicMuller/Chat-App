import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="text-center">

            {/* Header + Background */}
            <div id="background"></div>
            <span id="title" className="lead"><a href="/">Converso</a></span>

            {/* Login Form */}
            <div id="signUpBox">
                <h6 className="display-4">Sign Up</h6>
                <form>
                    <div className="inputBox">
                        <input  type="text" id="username" autoComplete="off" required />
                        <label htmlFor="username">Username</label>
                    </div>
                    
                    <div className="inputBox">
                        <input  type="email" id="email" autoComplete="off" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputBox">
                        <input  type="password" id="password" autoComplete="off" required />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="inputBox">
                        <input  type="password" id="confirmPassword" autoComplete="off" required />
                        <label htmlFor="confirmPassword">Confirm password</label>
                    </div>

                    <button>Sign Up</button>
                </form>
                <div className="linkContainer">
                    <Link className="simpleLink" to="/login">Already have an account?</Link>
                </div>
            </div>

        </div>  
    )
}

export default Register
