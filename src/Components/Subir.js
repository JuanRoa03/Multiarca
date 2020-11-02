import userEvent from '@testing-library/user-event';
import React, { Component } from 'react';
import Subirarchivo from "./Subirfoto";
import 'firebase/auth';






class subir extends Component {
  render(){
    return (

      <div>
        <div className="modal fade" id="subirfoto" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
          <div className="modal-dialog modal-xl modal-dialog-centered ">
            <div className="modal-content ProyectoModal ">
              <div className="row modal-body ">
                <div className="col justify-content-center celda">
                  <form>
                    <div className="form-group">
                      <Subirarchivo/>
                    </div>
                  </form>
                </div>
                <div className="col-sm-2 col-md-4 col-lg-4 celda">
                  <div className="row mt-2">
                    <div className="col-3 col-fluid" >
                      {/*  foto de perfil */}

                    
                      
                    </div>
                    <div className="col-9">

                    <p class="mt-4">Juan Roa </p>
                    {this.props.correo}
                    
                      {/*  nombre del usuario */}
                    </div>


                  </div>
                  <div className="row mt-2">
                    <div className="col">
                      

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

export default subir;