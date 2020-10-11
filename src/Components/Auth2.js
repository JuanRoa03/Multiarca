import React from 'react';
import 'firebase/auth';
import {useFirebaseApp,useUser} from 'reactfire';
import { useState } from 'react';

const AuthLogin = (props) => {
    const [ email, setEmail] =useState('');
    const [password, setPassword]= useState('');
    const firebase= useFirebaseApp();
    const user=useUser();

    const login = async() => {
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }
    const lognout = async() => {
        await firebase.auth().signOut();
    }
    return(

        <div>{
                !user &&
                    <div>
                        <label htmlFor="email"> Correo electronico</label>
                        <input type="email" id ="email" onChange={ (event) => setEmail(event.target.value)} />

                        <label htmlFor="password"> Contraseña</label>
                        <input type="password" id="password" onChange={(event) =>setPassword(event.target.value)}/>

                        <button onClick={login} > login</button>
                    </div>
            }
            { user && <button onClick={lognout}>Cerrar sesion</button>}
            {user && <h2>correo del usuario: {user.email}</h2>}
        </div>
    )
}
export default AuthLogin;