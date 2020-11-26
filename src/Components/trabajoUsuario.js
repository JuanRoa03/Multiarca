/* import React from 'react';
import 'firebase/auth';
import {useFirebaseApp,useUser } from 'reactfire';
import { useState,useEffect} from 'react';
import 'firebase/firestore';
import 'firebase/storage';



import Tra from './tra';

import LogoMultiArca from '../Assets/Images/LCT.png';


import SubTr from '../Components/Strabajo';






const AuthLogin = (props) => {



    const firebase= useFirebaseApp();
    
    const [trabajos, settra] = useState();
    
    
    const [sacar, setsacar] = useState();


    useEffect(()=>{

        

        firebase.firestore().collection('Trabajo_Usuarios').onSnapshot((snapshot) => {
            const Nue = snapshot.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()



                
            }))
              setsacar(Nue);

            if (user !== null) {
                for (let tra = 0; tra < Nue.length; tra++) {
                    if (user.usuario === Nue[tra].usuario) {
                        settra(Nue[tra])
                    }
                }
            }

            
        })
    

        
    },[])



return (




    <div className="row">

        {trabajos&&
        {trabajos.map((t)=> 
        <Tra


        img={t.image}
        nombre={t.Title}
        iden={t.id}
        Desc={t.Descripcion}
        Cate1={t.categoria}

        Cate2={t.categoria_2}
                     
                  />  )}

}
    </div>



);




} 
export default AuthLogin;


/* 
export default [


{"img": Spa,"id":1},
{"img": si,"id":2},
{"img": pi,"id":3}

] */ 