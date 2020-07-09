import React, { useState, useContext, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import { Link } from 'react-router-dom';
import './join.css';

const Join = props => {

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);

    const [userData, setUserData] = useState({});

    const username = userData.username;

    const [room, setRoom] = useState('');

    const [btn, setBtn] = useState(false);

    useEffect(() => {
        if (room !== '') {
            setBtn(true)
        } else {
            setBtn(false)
        }
    }, [room, btn])

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
            <div id="background"></div>
            <div id="joinContainer">
                <h6 className="display-4">Join</h6>
                <div className="inputBox">
                    <input onChange={(event) => setRoom(event.target.value)} placeholder="Please enter a room" type="text"/>
                    <Link onClick={event => (!room ? event.preventDefault() : null)} to={`/chat?name=${username}&room=${room}`}>
                        { btn ? <button>Go</button> : <button disabled>Go</button> }
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Join;
