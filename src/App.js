import React from 'react';
import logo from './Assets/Images/logo.svg';
import './Assets/css/App.css';
import firebase  from "./utils/firebase";
import "firebase/auth"

function App() {

  firebase.auth().onAuthStateChanged(user => {
    console.log(user)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Components/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
