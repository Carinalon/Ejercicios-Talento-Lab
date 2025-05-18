import React from 'react'

function EquipoTalentoLab({equipo}) {

  return (
    <div className='contenedorEquipoLab'>
      {equipo.map((miembro, index) => (
        <div key={index} className="tarjetaEquipo">
          <img className='imagenTarjetaEquipoLab' src={miembro.imagen} alt={miembro.nombre} />
          <h3>{miembro.nombre}</h3>
          <p>{miembro.rol}</p>
        </div>
        


      ))}
    </div>
  )
}


export default EquipoTalentoLab
