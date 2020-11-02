import React, {Component} from 'react';
import Spa from '../Assets/Images/spark.jpg';
import si from '../Assets/Images/dino.jpg';
import pi from '../Assets/Images/tu_yo_s.jpg';
import Carta from './carta';

function Exportar(){

const imagenes =[
{img: Spa, id: "a1"},
{img: si, id: "a2"},
{img: pi, id: "a3"}



]


return (
    <div>
        {
            imagenes.map((p) => 
            <Carta 
            image={p.img}
            iden={p.id}


            />)
            }
    </div>
);




} 
export default Exportar;


/* 
export default [


{"img": Spa,"id":1},
{"img": si,"id":2},
{"img": pi,"id":3}

] */