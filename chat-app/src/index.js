import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

