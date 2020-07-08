import React from 'react';
import Navbar from '../Navbar';
import { FirebaseContext } from '../Firebase';
import { useContext, useState, useEffect } from 'react';

const Home = props => {

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);

    const [userData, setUserData] = useState({});

    const username = userData.username;

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : props.history.push('/');
        });

        if (!!userSession) {
            firebase.user(userSession.uid)
            .get()
            .then( doc => {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    setUserData(myData);
                }
            })
            .catch(error => {
                console.log(error);
            });
        }
        
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
            <p className="text-capitalize">Welcome, {username}</p>
        </>
    )
}

export default Home

