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
import ErrorPage from '../404';
import Chat from '../Chat';
import Join from '../Join';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/join" component={Join} />
          <Route path="/chat" component={Chat} />
          <Route component={ErrorPage} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    </>
  );
}

export default App;
