import React from 'react';
import { NavLink } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="text-center">
            <div id="background">
            </div>
            <span id="title" className="lead"><a href="/">Converso</a></span>

            <h1 id="heading">Chat with people around the world</h1>
                <hr />
            <p className="lead" id="heading-p">Please login to your account!<br />If you don't have, register to create new one</p>

            <NavLink to="/login" className="btn btn-outline-light btn-lg mt-4" id="btnAuth">Login</NavLink>
            <NavLink to="/register" className="btn btn-light btn-lg mt-4" id="btnAuth">Register</NavLink>
        </div>
    )
}

export default Landing
