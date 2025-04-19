import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Carrito de Supermercado</h1>
      <Link to="/">Productos</Link>
      <Link to="/cart">Carrito</Link>
    </nav>
  );
};

export default Navbar;
