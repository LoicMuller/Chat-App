import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WaitingPic from '../../Img/WaitingPic.png';

export default class Content extends Component {
    render() {

        const { username } = this.props.userData;

        return (
            <div className="homeContent">
                <h1>Welcome, {username} !</h1>
                <p>You can create a new room by clicking the <Link to="/rooms">Rooms</Link> button.</p>
                <img src={WaitingPic} alt="WaitingPic"/>
            </div>
        )
    }
}
