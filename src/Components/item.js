import React, {Component} from 'react';

import {useFirebaseApp,useUser} from 'reactfire';
import Carta from './carta';
import 'firebase/auth';
import 'firebase/firestore';

import { useState,useEffect } from 'react';






const AuthLogin = (props) => {



    const firebase= useFirebaseApp();
    const [datos, setDatos] = useState([])



    useEffect(()=>{

        
        firebase.firestore().collection('Trabajo_Usuarios').onSnapshot((snapshot) => {
            const NuevosDatos = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()
                
            }))
            /*   console.log(NuevosDatos) */
              
            setDatos(NuevosDatos)
        })
    },[])

/* const imagenes =[
{img: Spa, id: "a1"},
{img: si, id: "a2"},
{img: pi, id: "a3"}

] */


return (
    <div className="row">
        {datos.map((d)=> 
        <Carta admin2={props.admin}


        img={d.image}
        nombre={d.Title}
        iden={d.id}
        Desc={d.Descripcion}
        Cate1={d.categoria}

        Cate2={d.categoria_2}
                     
                  />  )}


    </div>



);




} 
export default AuthLogin;


/* 
export default [


{"img": Spa,"id":1},
{"img": si,"id":2},
{"img": pi,"id":3}

] */