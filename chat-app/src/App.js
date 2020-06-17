import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import './App.css';
import AuthPage from './components/AuthPage';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AuthPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
