import React, { Component } from 'react';

import Subirarchivo from "./Subirfoto";





class editar extends Component {

    






    render(){
      return (
  
        <div>
            <div className="modal fade" id="EditarPerfil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div className="modal-dialog modal-xl modal-dialog-centered ">
                    <div className="modal-content ProyectoModal ">
                        <div className="row modal-body ">
                            <div className="col justify-content-center celda">
                                <form>
                                    <div className="form-group">
                                        <Subirarchivo/>
                                        <h2>hola</h2>
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-2 col-md-4 col-lg-4 celda">
                                <div className="row mt-2">
                                    <div className >
                                        {/*  foto de perfil */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default editar;