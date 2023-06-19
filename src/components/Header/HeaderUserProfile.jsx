import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../auth/AuthContext';

export default function HeaderUserProfile() {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="profile-container">
      {user ? (
        <>
          {user.onBoarded ? (
            <span>Hola {user.profile?.firstName}</span>
          ) : (
            <Link to="/profile">Completa tu perfil</Link>
          )}
          <button onClick={logout}>Cerrar sesión</button>
        </>
      ) : (
        <Link to="/signup">
          <h4>Registro</h4>
        </Link>
      )}
    </div>
  );
}
