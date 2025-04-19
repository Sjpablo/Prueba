import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.nombre}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
