import React, {Component} from 'react';
import firebase  from '../utils/firebase'
import 'firebase/storage';
//import {useFirebaseApp } from 'reactfire';

class Subirarchivo extends Component{
    

    
   
    
    

    render(){
        return(
            <div>
                <input type="file" onChange={this.props.onUpload}/> {/*cambiar la funcion para que no afecte con handeUpload si no que crear un boton con esa funcion*/}              
            </div> 
        )


    }

}
export default Subirarchivo;