import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../Firebase";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "../InfoBar";
import Input from "../Input";
import Messages from "../Messages";
import TextContainer from "../TextContainer";
import Navbar from "../Navbar";

import "./chat.css";

let socket;

const Chat = ({ location, history }) => {
  const ENDPOINT = "https://converso-app.herokuapp.com/";

  const firebase = useContext(FirebaseContext);

  const [userSession, setUserSession] = useState(null);

  const [userData, setUserData] = useState({});

  const username = userData.username;

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  useEffect(() => {
    let listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : history.push("/");
    });

    if (!!userSession) {
      firebase
        .user(userSession.uid)
        .get()
        .then((doc) => {
          if (doc && doc.exists) {
            const myData = doc.data();
            setUserData(myData);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return () => {
      listener();
    };
  }, [userSession, firebase, history]);

  return userSession === null ? (
    <>
      <div id="backgroundColor"></div>
      <div className="loader"></div>
      <p className="loaderText">Loading ...</p>
    </>
  ) : (
    <>
      <Navbar />
      <div className="outerContainer">
        <div id="background"></div>
        <div className="innerContainer">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
        <TextContainer users={users} />
      </div>
    </>
  );
};

export default Chat;
