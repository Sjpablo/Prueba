import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Guarda el usuario en el estado
    });

    return () => unsubscribe(); // Limpia el listener
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Sesión cerrada");
      navigate("/login"); // Redirige al login
    } catch (error) {
      alert("Error al cerrar sesión");
    }
  };

  return (
    <nav>
      <h2>Tienda Online</h2>
      <Link to="/">Inicio</Link>
      <Link to="/carrito">Carrito</Link>
      {user ? (
        <>
          <Link to="/perfil">Perfil</Link> {/* Link al perfil */}
          <button onClick={handleLogout}>Cerrar sesión</button>
        </>
      ) : (
        <Link to="/login">Iniciar sesión</Link>  {/* Solo mostrar login si no está logueado */}
      )}
    </nav>
  );
};

export default Navbar;
