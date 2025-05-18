import React from 'react'
import './App.css'
import Main from './Components/Main.jsx'
import EquipoTalentoLab from './Components/EquipoTalentoLab.jsx'



function App() {
  
  
  return (
    <>
      <Main/> 
      <EquipoTalentoLab/>
      <button onClick={mostrarMensaje}>Boton ejemplo</button>  
      
    </>
  )
}

export default App
