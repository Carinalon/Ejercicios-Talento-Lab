import React from 'react';
import Boton from './Boton';

const Tarjeta = ({titulo,img, descripcion, botonTexto, botonColor}) => {
     
    return (  
        <div className="tarjeta">
          <h2>{titulo}</h2>
            <img src={img} alt={"imagen del producto"} />
          <p>{descripcion}</p>
          <Boton texto={botonTexto} color={botonColor} />
        </div>
     
    );
        
}


export default Tarjeta