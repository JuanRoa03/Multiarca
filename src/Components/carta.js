import React from 'react';
import {useFirebaseApp } from 'reactfire';
import 'firebase/firestore';
import 'firebase/storage';
import {toast} from 'react-toastify';
import '../Assets/css/TopBar.css'




const Carta = (props) => {
    const firebase= useFirebaseApp();

    const Eliminar = async (id) =>{
       if (window.confirm('Seguro que desea eliminar este trabajo ?')){
        await firebase.firestore().collection('Trabajo_Usuarios').doc(id).delete();
        toast('Archivo eliminado',{
            type: 'error'
        })
       }

      
       
    };

    return (
        <div className="col-md-4 col-sm-12 ">
            <div className="col">
     


                    <div class="card mt-4"  width="200px" height="200px">
                        <div class="card">
                            <div class="modal-content">
                                <a href="#" data-toggle="modal" data-target={"#"+props.iden}>
                                <img src={props.img} class="card-img-top imagenes"></img>
                                </a>
                                <div class="modal-header">
                                    <h5 class="modal-title text-primary" id="exampleModalLabel">{props.nombre}</h5>
                                </div>

                                <div class="modal-body">
                                    <div>
                                    <a id="ConF" class="mr-2" href="#">
                                    <p>{props.Cate1}  -  {props.Cate2}</p>
                                    </a>
                                    </div>


                                  
                                 </div>



                            </div>
                        </div>
                    </div>
            </div>



                    <div className="modal fade " id={props.iden} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl modal-dialog-centered ">
                            <div class="modal-content ProyectoModal ">
                                <div class="row modal-body">
                                    <div class="col-sm-7 col-md-7 col-lg-7 ">
                                        <img src={props.img}  alt="" class="img-fluid"></img>
                                    </div>
                                    <div class="col-sm-4 col-md-4 col-lg-4 celda1 shadow bg-light ">

                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    
                                        <div class="row mt-2 ">
                                            <div class="col">
                                                <b>
                                            {props.nombre}</b>

                                            </div>
                        
                                        </div>
                                    
                                        <div class="row mt-2">
                                            <div class="col-6">
                                                <p>
                                                   {props.Cate1}
                                                </p>
                                            </div>
                                            <div class="col-6">
                                                <p>
                                                    {props.Cate2}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col">
                                                <p>
                                                   {props.Desc}
                                                </p>
                                            </div>
                                            
                                        </div>
                                        <div class='row mt-1'>
                                            <div className="col">
                                                {props.admin2 ? <button onClick={()=>Eliminar(props.iden)}>Eliminar Proyecto</button>:
                                                <div>
                                                   
                                                </div>

                                                }
                                            
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