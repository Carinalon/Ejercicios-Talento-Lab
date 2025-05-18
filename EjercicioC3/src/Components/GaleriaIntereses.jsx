import React from 'react'

const GaleriaIntereses = ({temas}) => {

const cambiarColor = (e) => {
 // e.target.style.backgroundColor = 'white';
  let texto = e.target.textContent; // Obtener el texto del botón
        let color = '#ccc'; // color por defecto

        if (texto === 'React') {
          color = '#61DBFB'; // celeste
        } else if (texto === 'JavaScript') {
          color = '#F7DF1E'; // amarillo
        } else if (texto === 'APIs') {
          color = '#4CAF50'; // verde
        } else if (texto === 'Diseño UX') {
          color = '#E91E63'; // rosa
        } else if (texto === 'Node.js') {
          color = '#8CC84B'; // verde Node
        }
    
        e.target.style.backgroundColor = color;
        e.target.style.color = '#000';
    }


  return (
    <div className='contenedorGaleria'>
      {temas.map((tema, index) => (
        <button className='botonGaleria' key={index}
        onClick={cambiarColor}
        >{tema}</button>

      ))}
    </div>
  )
}

export default GaleriaIntereses
