import React from 'react'

const Boton = ({texto, color}) => {

    let estilo = {backgroundColor:color, color:'black', padding:'10px 20px', borderRadius:'5px', border:'none', cursor:'pointer'}

  return (
    <button className='btn' style={estilo}>{texto}</button>
    
  )
}

export default Boton
