import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Navbar = () => {

    const firebase = useContext(FirebaseContext);

    const history = useHistory();

    const handleClick = e => {
        e.preventDefault();
        firebase.signOutUser()
        .then(() => {
            history.push('/');
        })
    }

    return (
        <>
            <div id="backgroundColor"></div>
            <nav>
                <ul className="navList">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/friends">Friends</Link></li>
                    <li><Link to="/groups">Groups</Link></li>
                    <li><Link to="/" onClick={handleClick}>Logout</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
