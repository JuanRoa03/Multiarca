import React from 'react';
import 'firebase/auth';
import {useFirebaseApp } from 'reactfire';
import { useState } from 'react';

export default (props) => {
    const [ email, setEmail] =useState('');
    const [password, setPassword]= useState('');
    const [user, setUser]=useState('');
    const [institution, setInstitution]= useState('');
    const [status,setStatus]= useState('');
    
    const firebase= useFirebaseApp();

    const submit = async() =>{
       await firebase.auth().createUserWithEmailAndPassword(email,password);
       console.log(user, institution,status);
    }

    return(
        <div>
            <div className="jumbotron mt-2 " >
                <label htmlFor="email"> Correo electronico</label>
                <input type="email" id ="email" onChange={ (ev)=> setEmail(ev.target.value)} />

                <label htmlFor="password"> Contraseña</label>
                <input type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)}/>

                <label htmlFor="user">Usuario</label>
                <input type="user" id ="user" onChange={(ev)=>setUser(ev.target.value)}/>

                <label htmlFor="institution">Institucion</label>
                <input type="text" id ="institution" onChange={(ev)=>setInstitution(ev.target.value)}/>

                <label htmlFor="status">Estado</label>
                <input type="text" id ="status" onChange={(ev)=>setStatus(ev.target.value)}/>

                <button onClick={submit} > Registro</button>
                
            </div>
        </div>
    )
}