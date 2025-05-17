import React from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Main from './Components/Main.jsx'
import Nav from './Components/Nav.jsx'
import Gallery from './Components/Gallery.jsx'
import Footer from './Components/Footer.jsx'



function App() {
  
  const mostrarMensaje = (e) => {
    console.log(e.target.style.backgroundColor = '#c48106')

    console.log('Explorando Mi proyecto')
  }

  return (
    <>
      <Header/>
      <Nav/> 
      <button onClick={mostrarMensaje}>Boton ejemplo</button>  
      <Main/> 
      <Gallery/>
      <Footer/>
      
    </>
  )
}

export default App
