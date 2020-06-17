import React, { Component } from 'react'

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
                            <button className="p-3 m-4 btn btn-outline-dark btn-lg">
                                SE CONNECTER
                            </button>
                        </div>
                        <div className="col-xs-2">
                            <button className="p-3 m-4 btn btn-outline-dark btn-lg">
                                S'INSCRIRE
                            </button>
                        </div>

                    </div> 

                </div>
            </div>
        )
    }
}
