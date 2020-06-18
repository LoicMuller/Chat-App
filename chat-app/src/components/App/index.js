import React from 'react';
import '../../App.css';

// Routes Imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components Imports
import Landing from '../Landing';
import Footer from '../Footer';
import Login from '../Login';
import Register from '../Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
        <Route path="/" component={Footer} />
      </Router>
    </div>
  );
}

export default App;
