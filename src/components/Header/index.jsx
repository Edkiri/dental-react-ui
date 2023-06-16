import { Link } from 'react-router-dom';

import './Header.css';
import { useContext } from 'react';
import AuthContext from '../../user/auth-context';

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <Link to="/">
        <h1>Dentisalud</h1>
      </Link>
      <div className="profile-container">
        {user ? (
          <>
            <span>{user.profile.firstName + ' ' + user.profile.lastName}</span>
            <button onClick={logout}>Cerrar sesión</button>
          </>
        ) : (
          <Link to="/signup">
            <h4>Registro</h4>
          </Link>
        )}
      </div>
    </header>
  );
}
