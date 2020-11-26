import React from 'react';
import {useFirebaseApp,useUser } from 'reactfire';
import { useState,useEffect} from 'react';
import 'firebase/firestore';
import 'firebase/storage';
import Item from './item';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';







    
const VerPerfil =()=>{
    const [datos, setDatos] = useState([])
    const [usuarioLogeado, setuser] = useState();
    const user=useUser();
    const firebase= useFirebaseApp();

    useEffect(()=>{

        
        firebase.firestore().collection('usuarios').onSnapshot((snapshot) => {
            const NuevosDatos = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()
                
            }))
              
            setDatos(NuevosDatos)
           
  
            console.log(user);
            if (user !== null) {
                for (let index = 0; index < NuevosDatos.length; index++) {
                    if (user.email === NuevosDatos[index].correo) {
                        setuser(NuevosDatos[index])
                    }
                }
            }
  
  
  
        })
  
        
    },[])

return (
  
        <div>
            <div className="modal fade" id="VerPerfil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-xl modal-dialog-centered ">
                    <div className="modal-content ProyectoModal ">
                        <div className="row modal-body ">
                            <div className="col justify-content-center celda">
                                <form>
                                    <div className="form-group">
                                         <div class="card mt-3 shadow bg-light cuerpo  ">
                                             <div class="row">
                                                 <div class="col-3 my-2 ml-2 ">
                                                    <a class=" mt-2 ">
                                                        { usuarioLogeado && <img class="img-fluid" width="600px" alt="Perfil" src={usuarioLogeado.image}/>}
                                                    </a>
                                                </div>
                                                <div class="col-8">
                                                    <div class=" p-4 col ">
                                                         <h4> {usuarioLogeado && <a> {usuarioLogeado.usuario}</a>}</h4>
                                                         <h3> {usuarioLogeado && <a> {usuarioLogeado.correo}</a>} </h3>
                                                         
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </form>

                                {/* <Item />    */}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );


}





   
  
  export default VerPerfil;