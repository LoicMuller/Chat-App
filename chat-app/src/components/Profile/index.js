import React from 'react';
import Navbar from '../Navbar';
import { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../Firebase';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { UserOutlined, CameraOutlined } from '@ant-design/icons';
import Axios from 'axios';

const Profile = props => {
 
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

    const handleImageChange = event => {
        const image = event.target.files[0];
    }
    const handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    }

    return userSession === null ? (
        <>
            <div id="backgroundColor"></div>
            <div className="loader"></div>
            <p className="loaderText">Loading ...</p>
        </> 
    ) : (
        <>
            <Navbar />
            <div className="text-center">
                <h1 className="profileH1">Welcome, {username}!</h1>
                <div className="iconProfile">
                    <Avatar size={100} icon={<UserOutlined />} alt="user" id="svgIcon" />
                    <input type="file" hidden="hidden" onChange={handleImageChange} id="imageInput" />
                    <CameraOutlined id="cameraIcon" onClick={handleEditPicture} data-toggle="tooltip" data-placement="top" title="Edit profile picture"/>
                </div>
                {/* <button className="btnPicChanger">Change Picture</button> */}
                {/* <label className="btnPicChanger">
                    Change Picture
                    <input type="file" onChange={handleImageChange}/>
                </label> */}
            </div>
        </>
    )
}

export default Profile
