import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Login = props => {
    const firebase = useContext(FirebaseContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true);
        } else if (btn) {
            setBtn(false);
        }
    }, [password, email, btn]);

    const handleSubmit = e => {
        e.preventDefault();

        firebase.signInUser(email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            props.history.push('/home');
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })
    };

    return (
        <div className="text-center">

            {/* Header + Background */}
            <div id="background"></div>
            <span id="title" className="lead"><a href="/">Converso</a></span>

            {/* Login Form */}
            <div id="loginBox">

                { error !== '' && <span>{error.message}</span> }

                <h6 className="display-4">Login</h6>
                <form onSubmit={handleSubmit}>
                    <div className="inputBox">
                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" autoComplete="off" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    
                    <div className="inputBox">
                        <input onChange={e => setPassword(e.target.value)} value={password} type="password" autoComplete="off" required />
                        <label htmlFor="password">Password</label>
                    </div>

                    { btn ? <button>Log In</button> : <button disabled>Log In</button> }

                </form>
                <div className="linkContainer">
                    <Link className="simpleLink" to="/register">Do not have an account yet?</Link>
                    <br />
                    <Link className="simpleLink" to="/forgetpassword">Forgot your password ?</Link>
                </div>
            </div>

        </div>   
    )
}

export default Login
