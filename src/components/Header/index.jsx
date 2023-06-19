import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import HeaderUserProfile from './HeaderUserProfile';
import AuthContext from '../../auth/AuthContext';
import './Header.css';

export default function Header() {
  const { user } = useContext(AuthContext);
  const [dropDown, setDropDown] = useState(false);

  const hideDropDown = () => setDropDown(false);

  return (
    <header>
      <Link to="/">
        <h1>Dentisalud</h1>
      </Link>
      {user ? (
        <>
          {user.onBoarded ? (
            <div className="drop-down">
              {dropDown && <HeaderUserProfile hideDropDown={hideDropDown} />}
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
            <Link className='d-button' to="/profile">Completa tu perfil</Link>
          )}
        </>
      ) : (
        <Link className="d-button" to="/signup">
          Regístrate o inicia sesión
        </Link>
      )}
    </header>
  );
}
