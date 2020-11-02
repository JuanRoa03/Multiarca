import React, {Component} from 'react';
import 'firebase/storage';
import item from './item';
import '../Assets/css/Login.css';




const Carta = (props) => {

    return (
        <div className="Ca">
                    <div class="card-columns mt-4 ">
                        <div class="card">
                            <div class="modal-content">
                                <a href="#" data-toggle="modal" data-target={"#"+props.iden}>
                                <img src={props.image} class="card-img-top"></img>
                                </a>
                                <div class="modal-header">
                                    <h5 class="modal-title text-primary" id="exampleModalLabel">Juan Roa</h5>
                                    <h5 class="modal-title text-primary" id="exampleModalLabel">Arte3D</h5>
                                </div>

                                <div class="modal-body">
                                    <a id="ConF" class="mr-2" href="#"></a>
                                 </div>



                            </div>
                        </div>
                    </div>

                    <div className="modal fade " id={props.iden} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl modal-dialog-centered ">
                            <div class="modal-content ProyectoModal ">
                                <div class="row modal-body">
                                    <div class="col-sm-7 col-md-7 col-lg-7 ">
                                        <img src={props.image}  alt="" class="img-fluid"></img>
                                    </div>
                                    <div class="col-sm-4 col-md-4 col-lg-4 celda1">
                                        <div class="row mt-2">
                                            <div class="col-3 col-fluid">
                                                {/* FOTO DE PERFIL  */}
                                            </div>
                                            <div class="col-9 ">
                                                <p class="mt-4">          </p>
                                            </div>
                                        </div>
                                        <div class="row mt-2"> 
                                            <div class="col-6">
                                                <p>AT-AT</p>
                                            </div>
                                            <div class="col-6">
                                                <p>23/07/2020</p>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col">
                                                <p>
                                                    uismod molestie mi in, sociis ac diam sagittis integer nunc neque cum. Libero fames c
                                                </p>
                                            </div>
                              
                                        </div>
                                    </div>
                                </div> 

                            </div>
                        </div>
                    </div>




        </div>

    )


    }

export default Carta;






/* 

class Subirarchivo extends Component{



    constructor(props){
        super(props);

        this.state={
            personas:[
                <img src={item[0].img}></img>,
                <img src={item[1].img}></img>,
                <img src={item[2].img}></img>
              ]

              

        }
    }

    

    render(){


        return(
            <div>
                    {
                        this.state.personas.map(p=>{
                            return(
                                <div>

                                    
                    <div class="card-columns mt-4">
                        <div class="card">
                            <div class="modal-content">
                                <a href="#" data-toggle="modal" data-target="#ilustraciones">
                                   <div className="foto">{p}</div>
                                </a>
                                <div class="modal-header">
                            <h5 class="modal-title text-primary" id="exampleModalLabel"></h5>
                                    <h5 class="modal-title text-primary" id="exampleModalLabel">Arte3D</h5>
                                </div>

                                <div class="modal-body">
                                    <a id="ConF" class="mr-2" href="#"></a>
                                 </div>



                            </div>
                        </div>
                    </div>

                                    
                                  
                                    
                                    
                                
                                </div>
                            )
                        })


                        


                    }
            </div> 
        )


    }

}
export default Subirarchivo; */