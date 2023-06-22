import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '@/auth/AuthContext';
import useOnClickOutside from '@/hooks/useOnClickOutside';

export default function HeaderProfileMenu({ hideDropDown }) {
  const { logout } = useContext(AuthContext);

  const userMenuRef = useRef(null);
  useOnClickOutside(userMenuRef, hideDropDown);

  const navigate = useNavigate();

  const handleGoToProfile = () => {
    hideDropDown();
    navigate('/profile');
  };

  const handleLogout = () => {
    hideDropDown();
    logout();
  };

  return (
    <ul ref={userMenuRef} className="profile-menu">
      <li>
        <button onClick={handleGoToProfile}>Ver perfil</button>
      </li>
      <li>
        <button className="logout-button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </li>
    </ul>
  );
}
