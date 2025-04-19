// src/components/ProductList.js
import React from "react";
import { useDispatch } from "react-redux";

const products = [
  { id: 1, nombre: "Manzanas", precio: 1000 },
  { id: 2, nombre: "Pan", precio: 1500 },
  { id: 3, nombre: "Leche", precio: 1200 }
];

const ProductList = () => {
  const dispatch = useDispatch();

  const agregarAlCarrito = (producto) => {
    dispatch({ type: "ADD_TO_CART", payload: producto });
  };

  return (
    <div>
      <h2>Productos</h2>
      <ul>
        {products.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
