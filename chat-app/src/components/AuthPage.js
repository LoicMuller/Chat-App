import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';

export default class AuthPage extends Component {
    render() {
        return (
            <div className="authPage">

                <header>
                    <div className="banner-header">
                        <h1 className="font text-center"><a href="/">CONVERSO</a></h1>
                    </div>
                </header>

                <div className="container">
                    
                    <div className="row justify-content-around authButton">

                        <div className="col-xs-2">
                            <NavLink className="btn-auth" to="/login">SE CONNECTER</NavLink>
                        </div>
                        <div className="col-xs-2">
                            <NavLink className="btn-auth" to="/signup">S'INSCRIRE</NavLink>
                        </div>

                    </div> 

                </div>
            </div>
        )
    }
}
