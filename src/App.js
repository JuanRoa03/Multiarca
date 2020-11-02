import React, {Component} from 'react';
import './Assets/css/App.css';
import { Switch, Route, Link } from "react-router-dom";
import Registro from './Components/Auth';
import Login from './Components/Auth2';
import Inicio from './Components/inicio';
import Puser from './Components/Puser';

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
          
        </Switch>


        {/* borrar despues  */}



      </div>
    );
  }
}

export default App;
