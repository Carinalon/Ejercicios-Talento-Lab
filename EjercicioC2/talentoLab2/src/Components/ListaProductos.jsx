import React from 'react';

const ListaProductos = ({productos}) => {
   

  return (
    <div >
    <p>
        1- Crea un componente que reciba un array de productos como prop y los
        muestre en una lista ordenada.
      </p>
      
      <ol className='lista__contenedor'>
      
        {productos.map((producto, img, index) => (
          <li className='lista' key={index}>
            <h2>{producto.titulo}</h2>
            <img src={producto.img}/>
            <p>{producto.descripcion}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListaProductos
