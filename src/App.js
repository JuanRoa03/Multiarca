import React, {Component} from 'react';
import './Assets/css/App.css';
import { Switch, Route, Link } from "react-router-dom";
import Registro from './Components/Auth';
import Login from './Components/Auth2';

class App extends Component {
  render(){
    return (
      <div>
        <Switch>
          <Route path="/Registro" component={Registro}/>
          <Route path="/Login" component={Login}/>
        </Switch>
          <Link target="_top" to="/">inicio</Link>
          <Link target="_top" to="/Registro">registro</Link>
          <Link target="_top" to="/Login">login</Link>
      </div>
    );
  }
}

export default App;
