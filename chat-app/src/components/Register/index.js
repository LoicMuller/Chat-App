import React, { useState, useContext } from "react";
import { FirebaseContext } from "../Firebase";
import { Link } from "react-router-dom";
import backgroundImg from "../../Img/Background2.jpg";

const Register = (props) => {
  const firebase = useContext(FirebaseContext);

  const data = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [loginData, setLoginData] = useState(data);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, username } = loginData;
    firebase
      .signUpUser(email, password)
      .then((authUser) => {
        return firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then((user) => {
        setLoginData({ ...data });
        props.history.push("/join");
      })
      .catch((error) => {
        setError(error);
        setLoginData({ ...data });
      });
  };

  const { username, email, password, confirmPassword } = loginData;

  const btn =
    username === "" ||
    email === "" ||
    password === "" ||
    password !== confirmPassword ? (
      <button disabled>Sign Up</button>
    ) : (
      <button>Sign Up</button>
    );

  // Errors
  const errorMsg = error !== "" && <span>{error.message}</span>;

  return (
    <div className="text-center">
      {/* Header + Background */}
      <div id="background">
        <img src={backgroundImg} alt="background" />
      </div>
      <span id="title" className="lead">
        <a href="/">Converso</a>
      </span>

      {/* Register Form */}
      <div id="signUpBox">
        {errorMsg}

        <h6 className="display-4">Sign Up</h6>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              onChange={handleChange}
              value={username}
              type="text"
              id="username"
              autoComplete="off"
              required
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="inputBox">
            <input
              onChange={handleChange}
              value={email}
              type="email"
              id="email"
              autoComplete="off"
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="inputBox">
            <input
              onChange={handleChange}
              value={password}
              type="password"
              id="password"
              autoComplete="off"
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="inputBox">
            <input
              onChange={handleChange}
              value={confirmPassword}
              type="password"
              id="confirmPassword"
              autoComplete="off"
              required
            />
            <label htmlFor="confirmPassword">Confirm password</label>
          </div>

          {btn}
        </form>
        <div className="linkContainer">
          <Link className="simpleLink" to="/login">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
