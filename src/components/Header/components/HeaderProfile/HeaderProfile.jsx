import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from 'react-icons/fa';

import HeaderProfileMenu from './HeaderProfileMenu';
import { AuthContext } from '@/contexts';
import './HeaderProfile.css';

export function HeaderProfile() {
  const { user } = useContext(AuthContext);
  const [dropDown, setDropDown] = useState(false);

  const hideDropDown = () => setDropDown(false);

  return (
    <>
      {user ? (
        <>
          {user.onBoarded ? (
            <div className="drop-down">
              {dropDown && <HeaderProfileMenu hideDropDown={hideDropDown} />}
              <button
                className="profile-dropdown-button"
                onClick={() => setDropDown(!dropDown)}
              >
                <p>{user.profile.firstName}</p>
                <FaAngleDown
                  className={`dropdown-icon ${dropDown && 'active'}`}
                />
              </button>
            </div>
          ) : (
            <Link className="d-button" to="/profile">
              Completa tu perfil
            </Link>
          )}
        </>
      ) : (
        <Link className="d-button" to="/signup">
          Regístrate o inicia sesión
        </Link>
      )}
    </>
  );
}
