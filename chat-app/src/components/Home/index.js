import React from 'react';
import Navbar from '../Navbar';
import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';

const Home = props => {

    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);

    const [userData, setUserData] = useState({});

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
        <Navbar userData={userData}/>
        // - "Nice to see you, {username}"
        // - Background bleu-marine/gris, texte plus clair
        // - Possibilité de cliquer sur l'îcone d'un de ses amis pour commencer
        // à discuter...
        // - If (amis == 0) return "Click here to add some friends" ->
        // redirect to="/addFriends" (explications sur comment inviter) ->
        // envoie un lien à l'username écrit si il existe, sinon msg d'erreur
    )
}

export default Home
