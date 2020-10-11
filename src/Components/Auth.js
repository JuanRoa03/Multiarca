import React from 'react';
import 'firebase/auth';
import {useFirebaseApp } from 'reactfire';
import { useState } from 'react';

const AuthRegistro = (props) => {
    const [ email, setEmail] =useState('');
    const [password, setPassword]= useState('');
    const [user, setUser]=useState('');
    
    const firebase= useFirebaseApp();

    const submit = async() =>{
       await firebase.auth().createUserWithEmailAndPassword(email,password);
       console.log(user);
    }

    return(
        <div>
            <div className="jumbotron mt-2 " >
                <label htmlFor="email"> Correo electronico</label>
                <input type="email" id ="email" onChange={ (event)=> setEmail(event.target.value)} />

                <label htmlFor="password"> Contraseña</label>
                <input type="password" id="password" onChange={(event)=>setPassword(event.target.value)}/>

                <label htmlFor="user">Usuario</label>
                <input type="user" id ="user" onChange={(event)=>setUser(event.target.value)}/>

                <button onClick={submit} > Registro</button>
            </div>
        </div>
    )
}
export default AuthRegistro;