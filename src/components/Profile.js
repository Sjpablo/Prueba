import React from "react";
import { auth } from "../firebase";

const Profile = () => {
  const user = auth.currentUser;

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      {user ? (
        <div>
          <p>Nombre: {user.displayName || "No disponible"}</p>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
          {/* Agrega más detalles si lo deseas */}
        </div>
      ) : (
        <p>No estás logueado.</p>
      )}
    </div>
  );
};

export default Profile;
