import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import useOnClickOutside from '@/hooks/useOnClickOutside';
import './Navbar.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const hideMenuList = () => setIsOpen(false);

  const navbarMenuRef = useRef(null);
  useOnClickOutside(navbarMenuRef, hideMenuList);

  const handleGoTo = (to) => {
    navigate(to);
    hideMenuList();
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
          <button type="button" onClick={() => handleGoTo('/')}>
            Inicio
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleGoTo('/my-appointments')}>
            Mis citas
          </button>
        </li>
        <button className="close-menu-button" onClick={hideMenuList}>
          X
        </button>
      </ul>
    </>
  );
}
