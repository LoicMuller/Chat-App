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

    const openSideBar = event => {
        event.preventDefault();
        document.querySelector('.sideBar').classList.toggle('active');
    }

    return (
        <>
            <div id="backgroundColor"></div>
            <nav>
                <ul className="navList">
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/rooms">Rooms</NavLink></li>
                    <li><NavLink to="/" onClick={handleClick}>Logout</NavLink></li>
                    
                    <i className="fas fa-bars" id="navIcon" onClick={openSideBar}></i>
                    <div className="sideBar">
                        <ul>
                            <li><NavLink to="/profile">Profile</NavLink></li>
                            <li><NavLink to="/rooms">Rooms</NavLink></li>
                            <li><NavLink to="/" onClick={handleClick}>Logout</NavLink></li>
                        </ul>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
