import React from 'react';
import './Assets/css/App.css';
import firebase  from "./utils/firebase";
import "firebase/auth"
import Auth from './Components/Auth';

function App() {

  firebase.auth().onAuthStateChanged(user => {
    console.log(user)
  })

  return (
    <div className="App">
      <p>Registro:</p>
      <Auth />
    </div>
  );
}

export default App;
