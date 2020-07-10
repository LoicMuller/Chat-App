import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
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
            <nav>
                <ul className="navList">
                    <li><NavLink to="/join" activeClassName="selected">Join</NavLink></li>
                    <li><NavLink to="/" onClick={handleClick}>Logout</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
