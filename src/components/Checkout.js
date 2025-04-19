// src/components/Checkout.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Checkout = () => {
  const carrito = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  const pagar = () => {
    alert("¡Pago realizado con éxito!");
    dispatch({ type: "CLEAR_CART" }); // Limpia el carrito
  };

  return (
    <div>
      <h2>Resumen de compra</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul>
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={pagar}>Pagar</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
