import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';

import useOnClickOutside from '../../../../hooks/useOnClickOutside';
import './Navbar.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const hideMenuList = () => setIsOpen(false);

  const navbarMenuRef = useRef(null);
  useOnClickOutside(navbarMenuRef, hideMenuList);

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
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Contacto</a>
        </li>
        <li>
          <a href="">Sobre nosotros</a>
        </li>
        <button className='close-menu-button' onClick={hideMenuList}>X</button>
      </ul>
    </>
  );
}
