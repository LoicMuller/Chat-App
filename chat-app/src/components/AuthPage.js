import React, { Component } from 'react'

export default class AuthPage extends Component {
    render() {
        return (
            <div className="container">

                <h1 className="font text-center m-5">Bienvenue sur Converso</h1>
                
                <div className="row justify-content-around">

                    <div className="col-xs-2 authButton">
                        <button className="p-3 m-4 btn btn-outline-dark">
                            SE CONNECTER
                        </button>
                    </div>
                    <div className="col-xs-2 authButton">
                        <button className="p-3 m-4 btn btn-outline-dark">
                            S'INSCRIRE
                        </button>
                    </div>

                </div> 

            </div>
        )
    }
}
