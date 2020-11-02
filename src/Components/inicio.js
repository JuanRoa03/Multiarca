
import React from 'react';


import TopBarC from './BarraSuperior';
import LogoArca from '../Assets/Images/LogosARCA.png'
import '../Assets/css/Registrarse.css'
import { Link } from 'react-router-dom';


const InicioC =(props)=>{
    return(
        <div>
            <TopBarC/>

            

            <div className="container col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-5 mt-5 pt-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="col mt-5 ">
                            <img src={LogoArca} className="img-fluid " alt="Logo MultiArca" width = "100rem"/>
                            <h1 className="h3 mt-3 font-weight-normal text-light">MultiArca</h1>
                        </div>
                        <div className="col mt-3">
                            <div className="form-group-lg">
                                <Link to="/login">
                                    <button  className="btn btn-lg btn-block bg-success text-light Barra" type="submit"> Inicio </button> 
                                </Link>
                            </div>
                        </div>
                        <div className="col mt-3">
                            <div className="form-group-lg">
                                <Link to="/registro">
                                    <button  className="btn btn-lg btn-block bg-success text-light Barra" type="submit"> Registrate </button>
                                </Link>
                            </div>
                        </div>
                        <div class="col-sm mt-3">
                            <div className="form-group">
                                <input type="email" className="form-control Barra" placeholder="Buscar" />
                            </div>
                        </div>
                        <div className="col mt-4 ">
                            <img src={LogoArca} className="img-fluid " alt="Logo MultiArca" width = "100rem"/>
                        </div>
                        <div class="col mt-2 text-white">
                            <h1>Que es Multiarca</h1>
                            <p>Plataforma para estudiantes
                                universitarios o egresados
                                que quieran compartir con
                                los demás sus trabajos o que
                                simplemente quieren tener
                                un portafolio virtual de estos.</p>
                            <h2>Quienes somos</h2>
                            <p>David Rodriguez Savedra</p>
                            <p>Juan Calderon Jimenez</p>
                            <p>Juan Jose Roa Solano</p>
                            <p>Victor Manuel Salcedo</p>
        </div>








                    </div>
                </div>
            </div>



        </div>




    );
}




export default InicioC;
