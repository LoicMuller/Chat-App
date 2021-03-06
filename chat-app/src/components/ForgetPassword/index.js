import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { FirebaseContext } from "../Firebase";
import backgroundImg from "../../Img/Background2.jpg";

const ForgetPassword = (props) => {
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .passwordReset(email)
      .then(() => {
        setError(null);
        setSuccess(`Check your mail ${email} to reset your password`);
        setEmail("");

        setTimeout(() => {
          props.history.push("/login");
        }, 5000);
      })
      .catch((error) => {
        setError(error);
        setEmail("");
      });
  };

  const disabled = email === "";

  return (
    <div className="text-center">
      {/* Header + Background */}
      <div id="background">
        <img src={backgroundImg} alt="background" />
      </div>
      <span id="title" className="lead">
        <a href="/">Converso</a>
      </span>

      {/* ForgotPass Form */}
      <div id="loginBox">
        {success && (
          <span
            style={{
              border: "1px solid green",
              background: "green",
              color: "#ffffff",
            }}
          >
            {success}
          </span>
        )}

        {error && <span>{error.message}</span>}

        <h6 className="display-4">Forget Password</h6>

        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              autoComplete="off"
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <button disabled={disabled}>Retrieve</button>
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

export default ForgetPassword;
