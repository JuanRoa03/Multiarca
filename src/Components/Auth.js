import React from 'react';
import {useFirebaseApp } from 'reactfire';
import { useState } from 'react';
import 'firebase/firestore';
import TopBarC from './BarraSuperior';
import LogoArca from '../Assets/Images/LogosARCA.png'
import '../Assets/css/Registrarse.css'
import { Link } from 'react-router-dom';
import 'firebase/storage';
import Subirarchivo from "./Subirfoto";
import {toast} from 'react-toastify';






const AuthRegistro = (props) => {
    const [ email, setEmail] =useState('');
    const [password, setPassword]= useState('');
    const [user, setUser]=useState('');
    const [file,setfile]=useState('');
/*     const DatosDeRegistro={
        email,
        password,
        user,
        
    }
     */
    

    const firebase= useFirebaseApp();

    const submit = async() =>{
        await firebase.auth().createUserWithEmailAndPassword(email,password);
               
      
      
        firebase.storage().ref(`/FotosUsuario/${file.name}`).put(file).then(snapshot => {
            return snapshot.ref.getDownloadURL()
            .then(url => {
                firebase.firestore().collection('usuarios').doc().set({
                    usuario:user,
                    image:url,
                    correo:email,
                    Pass:password

                })
                
            })
        });
        toast('Nuevo usuario creado',{
            type: 'success'
        })
    }

   const handleUpload=  (event)=>
    {
        setfile(event.target.files[0])   
    }



    return(
        <div>
            <TopBarC/>
            <div className="container col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-5 mt-5 pt-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="col mt-5 ">
                            <img src={LogoArca} className="img-fluid " alt="Logo MultiArca" width = "100rem"/>
                            <h1 className="h3 mt-3 font-weight-normal text-light">REGISTRO</h1>
                        </div>
                        <div className="col mt-4">
                            <div className="form-group-lg">
                                <input type="text"  className="form-control Barra" placeholder="Nombre de usuario" onChange={(event)=>setUser(event.target.value)}/>
                            </div>
                        </div>
                        <div className="col mt-2">
                            <div className="form-group-lg">
                                <input type="email" className="form-control Barra" placeholder="Correo" onChange={(event)=> setEmail(event.target.value)}/>
                            </div>
                        </div>
                        <div className="col-sm mt-2">
                            <div className="form-group-lg">
                                <input type="password" className="form-control Barra" placeholder="Contraseña" onChange={(event)=>setPassword(event.target.value)}/>
                            </div>
                        </div>
                        <div className="col-sm mt-2">
                            <div className="form-group-lg">
                                <input type="password" className="form-control Barra" placeholder="Confirmar Contraseña"/>
                            </div>
                        </div>
                        <div className="form-group-lg mt-2">
                            <Subirarchivo onUpload={handleUpload}/>
                        </div>



                        <div className="col-sm mt-2">
                            <div className="borde"></div>
                        </div>
                        <div className="col-sm mt-2">
                            <Link to="/Login"> <button onClick={submit} className="btn btn-lg btn-success btn-block Barra" type="submit">Registrar</button> </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuthRegistro;