import React from 'react';
import 'firebase/auth';
import {useFirebaseApp,useUser} from 'reactfire';
import { useState } from 'react';

export default (props) => {
    const [ email, setEmail] =useState('');
    const [password, setPassword]= useState('');

    
    
    const firebase= useFirebaseApp();

    const user=useUser();
    
    const login =async()=>{
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }
    const lognout =async()=>{
        await firebase.auth().signOut();
    }
    

    return(

        <div>
            
            {
                !user &&
                <div>
                <label htmlFor="email"> Correo electronico</label>
                <input type="email" id ="email" onChange={ (ev)=> setEmail(ev.target.value)} />

                <label htmlFor="password"> Contraseña</label>
                <input type="password" id="password" onChange={(ev)=>setPassword(ev.target.value)}/>

                <button onClick={login} > login</button>
                
            </div>
            }
            { user && <button onClick={lognout}>Cerrar sesion</button>}
        </div>
    )
}