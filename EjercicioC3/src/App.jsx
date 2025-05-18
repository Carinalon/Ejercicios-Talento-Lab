import React from 'react'
import './App.css'
import Main from './Components/Main.jsx'
import EquipoTalentoLab from './Components/EquipoTalentoLab.jsx'
import TarjetaProyecto from './Components/TarjetaProyecto.jsx'



function App() {
  
  const equipo = [
  { nombre: 'Silvia', rol: 'Product Owner', imagen: 'https://placehold.co/150' },
  { nombre: 'Luis', rol: 'Diseñador UX/UI', imagen: 'https://placehold.co/150' },
  { nombre: 'Matías', rol: 'Desarrollador', imagen: 'https://placehold.co/150' },
  { nombre: 'Sabrina', rol: 'Desarrolladora', imagen: 'https://placehold.co/150' },
];
  return (
    <>
      <Main />
      <EquipoTalentoLab equipo={equipo} />
      <TarjetaProyecto
        titulo="Plataforma de Gestión"
        descripcion="Una herramienta para optimizar la gestión de equipos."
        botonTexto="Explorar proyecto"
      />
    </>
  );
}

export default App
