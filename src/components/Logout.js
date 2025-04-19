// src/components/Logout.js
import React from "react";
import { auth, signOut } from "../firebase";

const Logout = () => {
  const handleLogout = async () => {
    await signOut(auth);
    alert("Sesión cerrada");
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
};

export default Logout;
