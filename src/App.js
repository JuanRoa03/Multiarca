import React from 'react';
import './Assets/css/App.css';
import "firebase/auth"
//import Auth from './Components/Auth'; // componente Auth para el registro de un nuevo usuario
//import Auth2 from './Components/Auth2'; // componente Auth para el inicio de sesion
//import {useUser} from 'reactfire';

import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";


function App() {

  

  return (
    <Router>
    <div>
      <Link target="_top" to="/">inicio</Link>
      <Link target="_top" to="/Registro">registro</Link>
      <Link target="_top" to="/Login">login</Link>
    </div>
    </Router>
  );
}

export default App;
