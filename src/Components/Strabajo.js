import React from 'react';
import {useFirebaseApp,useUser } from 'reactfire';
import { useState,useEffect} from 'react';
import 'firebase/firestore';
import 'firebase/storage';
import Subirarchivo from "./Subirfoto";
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';




const SubTr=()=> {

    const [Titulo,setTitulo]=useState('');
    const [Desc,setDesc]=useState('');
    const [file,setfile]=useState('');
    const firebase= useFirebaseApp();
    const [datos, setDatos] = useState([])
    const [usuarioLogeado, setuser] = useState();
    const [categ, setCat] = useState();
    const [categ2, setCat2] = useState();
    const user=useUser();
     
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

    const submit = async() =>{
     
             
    
    
      firebase.storage().ref(`/ArchivosUsuario/${file.name}`).put(file).then(snapshot => {
          return snapshot.ref.getDownloadURL()
          .then(url => {
              firebase.firestore().collection('Trabajo_Usuarios').doc().set({
                  Title:Titulo,
                  image:url,
                  Descripcion:Desc,
                  usuario:usuarioLogeado.usuario,
                  categoria:categ,
                  categoria_2:categ2,
                 

              })
              
          })
      });
      toast('Nuevo trabajo agragado',{
        type: 'success'
    })

  }

  
    const handleUpload=  (event)=>
    {
        setfile(event.target.files[0])   
    }




    
      return (

        <div className="modal fade" id="SubirTrabajo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" > 
         <div className="modal-dialog modal-xl modal-dialog-centered ">
         <div className="modal-content ProyectoModal ">


         
<div class="row modal-body "> 
      
      <div class="col justify-content-center celda">

        <form>
          <div class="form-group">
          <Subirarchivo onUpload={handleUpload} />
          </div>
        </form>



      </div>
      <div class="col-sm-2 col-md-4 col-lg-4 celda">
        


          <div class="row mt-2">
            <div class="col-3 col-fluid">
            <div className="img-circle">
                            { usuarioLogeado && <img class="fotoperfil" alt="Perfil" src={usuarioLogeado.image}/>}
                            </div>
            </div>
              <div class="col-9 ">
                <p class="mt-4"> {usuarioLogeado && <a> {usuarioLogeado.usuario}</a>} </p>
              </div>
          </div>
        <div class="row mt-2 ">
          <div class="col">         
          
          
          <input type="text" className="form-control" id ="Titulo"  placeholder="Título" onChange={(ev)=>setTitulo(ev.target.value)} /> {/*Titulo de la imagen */}

          </div>
        </div>

        <div class="row mt-2">
          <div class="col">

            <textarea class="form-control form-control-lg " id ="Desc" type="text" placeholder="Decripción" onChange={(ev)=>setDesc(ev.target.value)} ></textarea>
            
          
            
          </div>
          
        </div>

        <div class="row mt-2">
          <div class="col">

          <form id="Cat" onChange={(ev)=>setCat(ev.target.value)}>
            <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Categorías</option>
                <option value="Arte2D">Arte2D</option>
                <option value="VR/AR">VR/AR</option>
                <option value="Arte3D">Arte3D</option>
                <option value="Videojuegos">Videojuegos</option>
                <option value="Web">Web</option>
                <option value="Fotografia">Fotografia</option>
                <option value="App">App</option>
                <option value="Código">Código</option>
              </select>
            </div>
               </form>
          </div>
        </div>


        <div class="row mt-2">
          <div class="col">

          <form id="Cat" onChange={(ev)=>setCat2(ev.target.value)}>
          <div class="col-auto my-1">
              <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Categorías</option>
                <option value="Arte2D">Arte2D</option>
                <option value="VR/AR">VR/AR</option>
                <option value="Arte3D">Arte3D</option>
                <option value="Videojuegos">Videojuegos</option>
                <option value="Web">Web</option>
                <option value="Fotografia">Fotografia</option>
                <option value="App">App</option>
                <option value="Código">Código</option>
              </select>
            </div>
               </form>
            
          
            
          </div>
          
        </div>





        <div class="row mt-2">
          <div class="col text-center">
          <Link to="/Login"> <button onClick={submit} className="btn  btn-lg btn-success btn-block Barra" data-dismiss="modal"aria-label="Close" type="submit">Subir Trabajo</button></Link>

          </div>



        </div>
      </div>
    </div>












</div>

        </div>
        </div>
      );
    
  }
  
  export default SubTr;