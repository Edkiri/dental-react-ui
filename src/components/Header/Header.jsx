import { Link } from 'react-router-dom';

import { HeaderProfile, Navbar } from './components';
import './Header.css';

export default function Header() {
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
