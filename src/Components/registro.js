import React from 'react';
import "firebase/auth"
import Auth from './Auth'; // componente Auth para el registro de un nuevo usuario
//import Auth2 from './Components/Auth2'; // componente Auth para el inicio de sesion
//import {useUser} from 'reactfire';



function registro () {

  

  return (
    <div className="App">
      {user && <p>Usuario: {user.email}</p>}
      <Auth /> {/* LLamado del jsx que contiene el inicio de sesion*/}
      {/*<Auth />*/} {/* LLamado del jsx que contiene el formulario de registro*/}
    </div>
  );
}

export default registro;