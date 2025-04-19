import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile"; // Asegúrate de que esta ruta sea correcta
import { auth } from "./firebase"; // Asegúrate de que esta ruta sea correcta
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  // Establecer el estado del usuario al cambiar su estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Guarda el usuario logueado
    });
    return () => unsubscribe(); // Limpiar cuando se desmonte el componente
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Cerrar sesión
      alert("Sesión cerrada");
    } catch (error) {
      alert("Error al cerrar sesión");
    }
  };

  return (
    <Router>
      <nav>
        <Link to="/">Productos</Link> | 
        <Link to="/cart">Carrito</Link> | 
        {user ? (
          <>
            <Link to="/profile">Perfil</Link> |  {/* Enlace al perfil */}
            <button onClick={handleLogout}>Cerrar sesión</button> {/* Botón de logout */}
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> | 
            <Link to="/register">Registro</Link> 
          </>
        )}
        <Link to="/checkout">Pagar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        {user && <Route path="/profile" element={<Profile />} />} {/* Mostrar Perfil solo si está logueado */}
      </Routes>
    </Router>
  );
}

export default App;
