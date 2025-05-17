import React from "react";
import "./App.css";
import Tarjeta from "./Components/Tarjeta.jsx";
import Boton from "./Components/Boton";
import Main from "./Components/Main";
import ListaProductos from "./Components/listaProductos.jsx";

function App() {
  let productos2 = [
    {
      titulo: "Producto 1",
      img: "https://placehold.co/200x200",
      descripcion: "20% de descuento en todos los productos",
    },

    {
      titulo: "Producto 2",
      img: "https://placehold.co/200x200",
      descripcion: "30% de descuento en productos seleccionados",
    },

    {
      titulo: "Producto 3",
      img: "https://placehold.co/200x200",
      descripcion: "Envío gratis en compras mayores a $50",
    },
  ];

  return (
    <>
      <Main />
      <ListaProductos productos={productos2} />

      <p>
        2-Crea un componente Tarjeta que reciba props para mostrar un título,
        una descripción y un botón personalizado.
      </p>
      <div className="card">
        {productos2.map((producto) => (
          <Tarjeta
            key={producto.index}
            titulo={producto.titulo}
            img={producto.img}
            descripcion={producto.descripcion}
            botonTexto={"Comprar"}
            botonColor={"#ffffff"}
          />
        ))}
      </div>
    </>
  );
}

export default App;
