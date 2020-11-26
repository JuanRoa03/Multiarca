import React, { useState } from 'react';


const ImageUpload =(props) => {
    const [Imagen, setImagen] = useState();

    //OBTENIENDO LA IMAGEN
    const changeImagen = e => {
        setImagen(e.target.files[0]);
        console.log(Imagen);
        
    }
        return(
            <div className="content-modal">
                <header>
                    <input type="file" name="imagen"  />
                    <button>GUARDAR IMAGEN</button>
                </header>
            </div>
        )
    
}
export default ImageUpload;