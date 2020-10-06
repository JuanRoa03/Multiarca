import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './includes/bootstrap';
import {
  FirebaseAppProvider
} from 'reactfire';
import firebaseConfig from './utils/firebase';
import {
  BrowserRouter as Router,
  Route,
  Switch
   
} from "react-router-dom";

import Auth from './Components/Auth';
import Auth2 from './Components/Auth2';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig ={firebaseConfig}>
    
    <Suspense fallback={'Conectando con firebase'}>
    <React.StrictMode >
    <Router>
      <div>
        <Switch>
      <Route path="/" exact component={App}/>
      
     
     <Route path="/Registro" component={Auth}/ >
     
     
     
     <Route path="/Login" component={Auth2}/  >
     </Switch>
     
     

      </div>

     
     </Router>
       
       <App />
     </React.StrictMode>

    </Suspense>
     

  </FirebaseAppProvider>
 ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
