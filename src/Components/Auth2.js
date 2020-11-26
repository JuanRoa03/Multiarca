import React from 'react';/*5/11/2020*/
import 'firebase/auth';
import 'firebase/firestore';
import {useFirebaseApp,useUser} from 'reactfire';
import { useState,useEffect } from 'react';

import EditarPerfil from '../Components/editarPerfil';
import Dos from '../Assets/Images/ConF1.png';
import TresD from '../Assets/Images/ConF2.png';
import ViJu from '../Assets/Images/ConF3.png';
import Web from '../Assets/Images/ConF5.png';



import Item from './item';


import Vr from '../Assets/Images/ConF6.png';
import Foto from '../Assets/Images/ConF7.png';
import Apli from '../Assets/Images/ConF4.png';
import Pro from '../Assets/Images/ConF8.png';



import LogoMultiArca from '../Assets/Images/LCT.png';
/* import { isPlainObject } from 'jquery'; */


import { Link } from 'react-router-dom';
import LogoArca from '../Assets/Images/LogosARCA.png'
import TopBarC from './BarraSuperior';
import '../Assets/css/Login.css';



import Subir from '../Components/Subir';
import Editar from '../Components/editarPerfil';
import VerPerfil from '../Components/Perfil';
import SubTr from '../Components/Strabajo';

import Perfil from '../Components/Puser';














const AuthLogin = (props) => {
    const [ email, setEmail] =useState('');
    const [password, setPassword]= useState('');
    const firebase= useFirebaseApp();
    const user=useUser();
     


    /* 
     const [datos,setDatos]  = useState({

        nombreU:''

     })



     const resi= (event) =>{
         setDatos({
             ...datos,
             [event.target.data]:event.target.data
         })
     } */


    /*   useEffect(()=>{




        
        firebase.firestore().collection('usuarios').get().then(x => { 

            const data = x.docs.map(doc =>doc.data());
          console.log(data);


       
        });




    },[])  -----------------------------------original ----------------------------------*/

    const [a, setA] = useState(false)
    const [datos, setDatos] = useState([])
    const [usuarioLogeado, setuser] = useState();

    useEffect(()=>{

        
        firebase.firestore().collection('usuarios').onSnapshot((snapshot) => {
            const NuevosDatos = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()
                
            }))
              
            setDatos(NuevosDatos)
           

            
            if (user !== null) {
                for (let index = 0; index < NuevosDatos.length; index++) {
                    if (user.email === NuevosDatos[index].correo) {
                        if("admin@gmail.com" === user.email){
                            setA(true);
                        }
                        setuser(NuevosDatos[index])
                    }
                }
            }
        })

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


    


    const Eliminar = async (id) =>{
        if (window.confirm('Seguro que desea eliminar este trabajo ?')){
         await firebase.firestore().collection('usuarios').doc(id).delete();
        }
     };





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
                                            <h1 className="h3 mt-3 font-weight-normal text-light">Inicia sesión</h1>
                                        </div>
                                        <div className="col mt-5">
                                            <p className="text-white">¿No tienes cuenta? <Link to="/registro"><a href="#" class="text-success">REGISTRATE</a></Link></p>
                                        </div>
                                        <div className="col mt-2">
                                            <div className="form-group-lg">
                                                <input type="email" id ="email" className="form-control Barra" placeholder="Correo Electrónico" onChange={ (event) => setEmail(event.target.value)} />
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
                            { usuarioLogeado && <img class="fotoperfil" alt="Perfil" src={usuarioLogeado.image}/>}
                            </div>
                            <div class="dropdown ">
                                <button className="btn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   
                                {usuarioLogeado && <a> {usuarioLogeado.usuario}</a>}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <button type="button" class="btn" data-toggle="modal" data-target="#VerPerfil">
                                      Ver perfil
                                    </button >
                                    <button type="button" class="btn" data-toggle="modal" data-target="#SubirTrabajo" >
                                        Subir Trabajo
                                    </button>
                                    <button type="button" class="btn" >
                                          <Link to="/Perfil">Perfil</Link>
                                    </button>

                                  

                                    { user && <button  className="btn" onClick={lognout}>Cerrar sesión</button>}

                                </div>
                            </div>
                        </form>

                </nav> 


                <div className="container">
                    <Subir correo={user.email}/>
                    <Editar/>
                    <SubTr/>
                    <VerPerfil/>
                    
                    {/* <div className="row justify-content-md-center mt-5">
                        <div class="col-md-6 col-lg-8 col-sm-2 ">
                            <div class="form-group-lg text-center ">
                                <input type="email" href="#" class="form-control buscador" placeholder="Buscar"></input>
                               
                            </div>
                        </div>
                    </div>
 */}


                    <div className="row justify-content-md-center mt-5 categorias">
                        <div className="col-sm-3 col-3 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Dos}></img>
                                <p class="text-white">
                                    Arte 2D
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-3 col-3 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={TresD}></img>
                                <p class="text-white">
                                    Arte 3D
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-3 col-3 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={ViJu}></img>
                                <p class="text-white">
                                    VideoJuegos
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-3 col-3 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Web}></img>
                                <p class="text-white">
                                    Web
                                </p>
                            </a>
                        </div>
                    </div>

                    <div className="row justify-content-center categorias">
                    <div className="col-sm-12 col-3 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Vr}></img>
                                <p class="text-white">
                                    VR/AR
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-12 col-3 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Foto}></img>
                                <p class="text-white">
                                    Fotografía
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-12 col-3 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Apli}></img>
                                <p class="text-white">
                                    App
                                </p>
                            </a>
                        </div>
                        <div className="col-sm-12 col-3 col-md-3 col-lg-2 text-center">
                            <a className="img-fluid img-circle" href="#">
                                <img src={Pro}></img>
                                <p class="text-white">
                                    Código
                                </p>
                            </a>
                        </div>


                    </div>
                    <div>

                        



                    </div>
                    <Item admin={a} />   
                </div>
                <hr class="featurette-divider"></hr>
                {
                    a ? 
                        <div className="container">
                        <div className="row">
                        {
                                datos.map((d)=>{
                                    return(
                                        <div className="col-2">
                                            <div className="card">
                                                <img class="card-img-top" src={d.image} height="100px"/>
                                                <div class="card-body">
                                                    <div>{d.usuario}</div>
                                                    <button onClick={()=>Eliminar(d.id)}>eliminar</button>
                                                </div>
                                            </div>

                                        </div>
                                    );                    
                            })}
                        </div>
                        <hr class="featurette-divider"></hr>
                    </div>
                    :
                    <div>
                        <hr class="featurette-divider"></hr>
                    </div>

                }

                    
            </div>
            }

        </div>
    )
}
export default AuthLogin;










