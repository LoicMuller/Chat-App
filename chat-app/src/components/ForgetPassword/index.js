import React from 'react';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
    return (
        <div className="text-center">

            {/* Header + Background */}
            <div id="background"></div>
            <span id="title" className="lead"><a href="/">Converso</a></span>

            {/* ForgotPass Form */}
            <div id="loginBox">
                <h6 className="display-4">Forget Password</h6>
                <form>
                    <div className="inputBox">
                        <input  type="email" autoComplete="off" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    
                    <button>Retrieve</button>
                </form>
                <div className="linkContainer">
                    <Link className="simpleLink" to="/login">Already have an account?</Link>
                </div>
            </div>

        </div>   
    )
}

export default ForgetPassword
