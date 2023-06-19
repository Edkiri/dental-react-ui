import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../auth/AuthContext';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function HeaderUserProfile({ hideDropDown }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const userMenuRef = useRef(null);
  useOnClickOutside(userMenuRef, hideDropDown);

  const handleGoToProfile = () => {
    hideDropDown();
    navigate('/profile');
  };

  const handleLogout = () => {
    hideDropDown();
    logout();
  };

  return (
    <div ref={userMenuRef} className="profile-container">
      <button onClick={handleGoToProfile}>Ver perfil</button>
      <button className="logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
