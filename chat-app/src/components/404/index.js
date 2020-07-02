import React from 'react';
import { useHistory } from 'react-router-dom';

const ErrorPage = () => {

    const history = useHistory();

    const goBack = () => history.push('/home');

    return (
        <>     
            <div className="bg-purple"> 
                <div className="text-center p-5">
                    <p className="text-404">404</p>
                    <p className="content-404">Oops! Looks like you got lost</p>
                    <button onClick={goBack} className="btnBack">Go Back to home</button>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
