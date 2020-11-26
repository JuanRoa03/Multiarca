import React from 'react';
import 'firebase/auth';
import {useFirebaseApp,useUser } from 'reactfire';
import { useState,useEffect} from 'react';
import 'firebase/firestore';
import 'firebase/storage';

import LogoMultiArca from '../Assets/Images/LCT.png';
import Subirarchivo from "./Subirfoto";

import { Link } from 'react-router-dom';
import SubTr from '../Components/Strabajo';
import {toast} from 'react-toastify';

import Item from './item';





const Puser =(props)=>{

    const [usuarioLogeado, setuser] = useState();


    
    const [sacar, setsacar] = useState();
    const [file,setfile]=useState('');
    const [user2, setUser2]=useState('');
    const [trabajos, settra] = useState();
    
    
    const user=useUser();
    const firebase= useFirebaseApp();

    const handleUpload=  (event)=>
    {
        setfile(event.target.files[0])   
    }


    const ActFoto = async(id) =>{
     
             
    
    
        firebase.storage().ref(`/ArchivosUsuario/${file.name}`).put(file).then(snapshot => {
            return snapshot.ref.getDownloadURL()
            .then(url => {
                firebase.firestore().collection('usuarios').doc(id).update({
                    
                    image:url,
                    
                   
  
                })
                
            })
        });
        toast('Cambiando imagen de usuario',{
          type: 'info'
      })
  
    }


    useEffect(()=>{

        

        firebase.firestore().collection('Trabajo_Usuarios').onSnapshot((snapshot) => {
            const Nue = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()



                
            }))
              setsacar(Nue);

            if (user !== null) {
                for (let tra = 0; tra < Nue.length; tra++) {
                    if (user.usuario === Nue[tra].usuario) {
                        
                        settra(Nue[tra])
                        
                    }
                }
            }

            
        })
    









        firebase.firestore().collection('usuarios').onSnapshot((snapshot) => {
            const NuevosDatos = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()
                
            }))





              
            
           
  
            if (user !== null) {
                for (let index = 0; index < NuevosDatos.length; index++) {
                    if (user.email === NuevosDatos[index].correo) {
                        setuser(NuevosDatos[index])
                    }
                }
            }




           
  
  
  
        })
  
        
    },[])


    
    return(


    <div>
        <div>
           {/* <TopBarC/> */} 




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
                                    <button type="button" class="btn" data-toggle="modal" data-target="#SubirTrabajo" >
                                        Subir Trabajo
                                    </button>
                                    <button type="button" class="btn" >
                                    <Link to="/Login"> Volver </Link>
                                    </button>



                                </div>
                            </div>
                        </form>

                </nav> 


    <div className="container">
    <div className="form-group">
                                <div class="card mt-3 shadow bg-light cuerpo  ">
                                    <div class="row">
                                        <div className="col-md-4 col-sm-6 my-2 ml-2 ">
                                        <a className="mt-2">
                                            { usuarioLogeado && <img class="img-fluid" width="600px" alt="Perfil" src={usuarioLogeado.image}/>}
                                        </a>
                                    </div>
                                    <div class="col-md-7  col-sm-6">
                                        <div class=" p-2 col ">
                                                <h2> {usuarioLogeado && <a> {usuarioLogeado.usuario}</a>}</h2>
                                                <h3> {usuarioLogeado && <a> {usuarioLogeado.correo}</a>} </h3>
                                                
                                                <div>
                                                    <button type="button" class="btn  mt-4 btn-primary" data-toggle="modal" data-target="#exampleModal">
                                                    Editar foto de perfil
                                                    </button>
                                                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editar foto de perfil</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          
          <br></br>
          <div>
          
            <Subirarchivo onUpload={handleUpload}/>  
          </div>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
        <button type="button" onClick={()=>ActFoto(usuarioLogeado.id)} class="btn btn-primary"data-dismiss="modal">Aceptar</button>
      </div>
    </div>
  </div>
</div>
                                                         </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>

{
/*     <div className="row">
        <div className="col">

        </div>
    </div> */
}







                </div>
                
                
                
                {/* <Item/>  */}

               
                <SubTr/>





        </div>

        



      </div>  
        



    );
}




export default Puser;



