import React from 'react';
import '../../App.css';

// Routes Imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components Imports
import Landing from '../Landing';
import Footer from '../Footer';
import Login from '../Login';
import Register from '../Register';
import ForgetPassword from '../ForgetPassword';
import Home from '../Home';
import Profile from '../Profile';
import Rooms from '../Rooms';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/rooms" component={Rooms} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    </>
  );
}

export default App;
