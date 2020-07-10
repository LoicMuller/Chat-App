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
    
    const handleClick = e => {
        e.preventDefault();
        firebase.signOutUser()
        .then(() => {
            props.history.push('/');
        })
    }

    return userSession === null ? (
        <>
            <div id="backgroundColor"></div>
            <div className="loader"></div>
            <p className="loaderText">Loading ...</p>
        </> 
    ) : (
        <>
            <div id="background"></div>
            <ul className="navList2">
                <li><a href="/" onClick={handleClick}>Logout</a></li>
            </ul>
            <div id="joinContainer">
                <h6 className="display-4">Join</h6>
                <div className="inputBox2">
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
