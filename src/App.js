import React, {Component} from 'react';
import './Assets/css/App.css';
import { Switch, Route, Link } from "react-router-dom";
import Registro from './Components/Auth';
import Login from './Components/Auth2';
import Inicio from './Components/inicio';
import Puser from './Components/Puser';
import Strabajo from './Components/Strabajo';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {



  render(){
    return (

     

      <div>

        <Switch>
          <Route path="/Inicio" component={Inicio}/>
          <Route exact path="/" component={Inicio}/>
          <Route path="/Registro" component={Registro}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Perfil" component={Puser}/>
          
          <Route path="/Strabajo" component={Strabajo}/>
          
          
        </Switch>
        <ToastContainer/>

        {/* borrar despues  */}



      </div>
    );
  }
}

export default App;
