import React, { Component } from 'react';
import 'firebase/auth';
import firebase from 'firebase';
import 'firebase/firestore';
import {useFirebaseApp,useUser} from 'reactfire';
import { useState,useEffect } from 'react';


import { Link } from 'react-router-dom';
import LogoArca from '../Assets/Images/LogosARCA.png'
import TopBarC from './BarraSuperior';
import '../Assets/css/Login.css';
import Editar from '../Components/editarPerfil';
import LogoMultiArca from '../Assets/Images/LCT.png';




class Perfil extends Component{


render(){
   


return(
    <div>
        <h1>{this.props.usuario}</h1>
   



    </div> 
)
}
}
export default Perfil;



