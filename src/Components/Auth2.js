import React from 'react';
import 'firebase/auth';
import 'firebase/firestore';
import {useFirebaseApp,useUser} from 'reactfire';
import { useState,useEffect } from 'react';

import Subir from '../Components/Subir';
import EditarPerfil from '../Components/editarPerfil';
import Dos from '../Assets/Images/ConF1.png';
import TresD from '../Assets/Images/ConF2.png';
import ViJu from '../Assets/Images/ConF3.png';
import Web from '../Assets/Images/ConF5.png';


import Item from './item';
import Carta from './carta';


import Vr from '../Assets/Images/ConF6.png';
import Foto from '../Assets/Images/ConF7.png';
import Apli from '../Assets/Images/ConF4.png';
import Pro from '../Assets/Images/ConF8.png';

import Ca from '../Assets/Images/logosin.png';
import a from '../Assets/Images/tu_yo_s.jpg';
import c from '../Assets/Images/pixel1.jpg';
import d from '../Assets/Images/pixel2.jpg';



import LogoMultiArca from '../Assets/Images/LCT.png';
/* import { isPlainObject } from 'jquery'; */


import { Link } from 'react-router-dom';
import LogoArca from '../Assets/Images/LogosARCA.png'
import TopBarC from './BarraSuperior';
import '../Assets/css/Login.css';
import Editar from '../Components/editarPerfil';












const AuthLogin = (props) => {
    const [ email, setEmail] =useState('');
    const [password, setPassword]= useState('');
    const firebase= useFirebaseApp();
    const user=useUser();

    useEffect(()=>{
        firebase.firestore().collection('usuarios').get().then(x => { 

            const data = x.docs.map(doc =>doc.data());
          /*   console.log(data); */
        });

    },[])





    {/*const imangenes = ['dino.jpg','sasu.jpg', 'te.jpg'];

    const lista = imagenes.map((imag) =>
    <li> {imag}</li>
    );*/}

    

    



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
                        
                        <TopBarC/>
                            <div className="container col-xl-3 col-lg-6 col-md-6 col-sm-6  mt-5 mb-5">
                                <div className="row">
                                    <div className="col text-center">
                                        <div className="col mt-5 ">
                                            <img src={LogoArca} className="img-fluid " alt="Logo MultiArca" width = "100rem"/>
                                            <h1 className="h3 mt-3 font-weight-normal text-light">Inicia sesion</h1>
                                        </div>
                                        <div className="col mt-5">
                                            <p className="text-white">¿No tienes cuenta? <Link to="/registro"><a href="#" class="text-success">REGISTRATE</a></Link></p>
                                        </div>
                                        <div className="col mt-2">
                                            <div className="form-group-lg">
                                                <input type="email" id ="email" className="form-control Barra" placeholder="Correo Electronico" onChange={ (event) => setEmail(event.target.value)} />
                                            </div>

                                        </div>
                                        
                                        <div className="col mt-2">
                                            <div className="form-group-lg">
                                                <input type="password" className="form-control Barra" placeholder="Contraseña" id="password" onChange={(event) =>setPassword(event.target.value)}/>
                                            </div>

                                        </div>
                                        <div className="col-sm mt-2">
                                            <div className="borde"></div>
                                        </div>

                                        <div className="col mt-2">
                                            <div className="form-group-lg">
                                                  <button onClick={login} className="btn btn-lg btn-success btn-block Barra" type="submit"> Ingresar</button>
                                            </div>

                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
            }

            {user &&
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="mr-auto">
                    <img src={LogoMultiArca}  className="img-fluid" alt="Logo"/> 

                    </div>
                        <form className="form-inline form-right mr-3">

                            <div className="img-circle">

                            </div>
                            <div class="dropleft ">
                                <button className="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {user && <a>correo del usuario: {user.email}</a>}
                                    
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <button type="button" class="btn" data-toggle="modal" data-target="#EditarPerfil">
                                        Editar perfil
                                    </button >
                                    <button type="button" class="btn">

                                    <Link to="/Perfil"><a href="#" class="text-">Perfil</a></Link>

                                    </button>




                                    <button type="button" class="btn" data-toggle="modal" data-target="#subirfoto">
                                        Subir Foto
                                    </button>

                                    { user && <button  className="btn" onClick={lognout}>Cerrar sesion</button>}

                                </div>
                            </div>
                        </form>

                </nav> 


                <div className="container">
                    <Subir correo={user.email}/>
                    <Editar/>
                    <div className="row justify-content-md-center mt-5">
                        <div class="col-md-6 col-lg-8 col-sm-2 ">
                            <div class="form-group-lg text-center ">
                                <input type="email" href="#" class="form-control buscador" placeholder="Buscar"></input>
                            </div>
                        </div>
                    </div>



                    <div className="row justify-content-md-center mt-1 categorias">
                        <div className="col-sm-12 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Dos}></img>
                                <p class="text-white">
                                    Arte 2D
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={TresD}></img>
                                <p class="text-white">
                                    Arte 3D
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={ViJu}></img>
                                <p class="text-white">
                                    VideoJuegos
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Web}></img>
                                <p class="text-white">
                                    Web
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-center categorias">
                    <div className="col-sm-12 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Vr}></img>
                                <p class="text-white">
                                    VR/AR
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Foto}></img>
                                <p class="text-white">
                                    Fotografía
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Apli}></img>
                                <p class="text-white">
                                    Aplicaciones
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-12 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Pro}></img>
                                <p class="text-white">
                                    Programacion 
                                </p>
                            </a>
                        </div>


                    </div>







                
                    <Item/>                

                </div>





            </div>
            }

        </div>
    )
}
export default AuthLogin;










