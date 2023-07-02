import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import useOnClickOutside from '@/hooks/useOnClickOutside';
import { AuthContext } from '@/contexts';
import './Navbar.css';

export function Navbar() {
  const { user } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const hideMenuList = () => setIsOpen(false);

  const navbarMenuRef = useRef(null);
  useOnClickOutside(navbarMenuRef, hideMenuList);

  const handleNavigate = () => {
    if (user.roles.includes('dentist')) {
      hideMenuList();
      return navigate('/dentist-appointments');
    }
    if (user.roles.includes('user')) {
      hideMenuList();
      return navigate('/my-appointments');
    }
  };

  const handleGoHome = () => {
    hideMenuList();
    return navigate('/');
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="menu-ham-button">
        <FaBars />
      </button>
      <ul
        ref={navbarMenuRef}
        className={`menu-list ${isOpen ? 'open' : 'closed'}`}
      >
        <li>
          <button type="button" onClick={handleGoHome}>
            Inicio
          </button>
        </li>
        {user && (
          <li>
            <button type="button" onClick={handleNavigate}>
              Mis citas
            </button>
          </li>
        )}
        <button className="close-menu-button" onClick={hideMenuList}>
          X
        </button>
      </ul>
    </>
  );
}
