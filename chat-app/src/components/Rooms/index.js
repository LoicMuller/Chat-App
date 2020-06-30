import React from 'react';
import Navbar from '../Navbar';
import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';

const Profile = props => {

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        });
        
        return () => {
            listener();
        };

    }, [userSession, firebase, props.history])

    return userSession === null ? (
        <>
            <div id="backgroundColor"></div>
            <div className="loader"></div>
            <p className="loaderText">Loading ...</p>
        </> 
    ) : (
        <>
            <Navbar />
        </>
    )
}

export default Profile
