import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../Firebase';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat = ({ location, history }) => {
    const ENDPOINT = 'localhost:5000';

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);

    const [userData, setUserData] = useState({});

    const username = userData.username;

    const [room, setRoom] = useState('');

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);

        socket.emit('join', { name, room });
    }, [ENDPOINT, location.search])

    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setUserSession(user) : history.push('/');
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

    }, [userSession, firebase, history])

    return userSession === null ? (
        <>
            <div id="backgroundColor"></div>
            <div className="loader"></div>
            <p className="loaderText">Loading ...</p>
        </> 
    ) : (
        <>
            <h1>Chat</h1>
        </>
    )
}

export default Chat
