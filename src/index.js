import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './Assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './includes/bootstrap';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './utils/firebase';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig ={firebaseConfig}>
    <Suspense fallback={'Conectando con firebase'}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Suspense>
  </FirebaseAppProvider>
 ,document.getElementById('root'));

serviceWorker.unregister();
