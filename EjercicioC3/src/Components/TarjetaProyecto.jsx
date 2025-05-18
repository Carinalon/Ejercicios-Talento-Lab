import React from 'react'

const TarjetaProyecto = ({titulo, descripcion, botonTexto}) => {

  const manejarClick = () => {
    console.log("Explorando:", titulo);
  }

  return (
    <div>
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      <button onClick={manejarClick}>{botonTexto}</button>
    </div>
  )
}

export default TarjetaProyecto
