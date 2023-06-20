import { Link } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import { HeaderProfile } from './components/HeaderProfile/';
import './Header.css';

export function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Dentisalud</h1>
      </Link>
      <div className="header-right">
        <HeaderProfile />
        <Navbar />
      </div>
    </header>
  );
}
