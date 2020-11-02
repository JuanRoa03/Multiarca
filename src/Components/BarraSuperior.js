import React from 'react';
import LogoMultiArca from '../Assets/Images/LCT.png';
import '../Assets/css/TopBar.css'
import { Link } from "react-router-dom";
const TopBarC =(props)=>{

    return(
        <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
            <Link className="navbar-brand LogoTopBar" to='/Inicio'> <img src={LogoMultiArca}  className="img-fluid" alt="Logo"/> </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav">
{/*                 <li className="nav-item active">
                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li> */}

            </ul>
        </div>



      </nav>
      
    )
}

export default TopBarC;