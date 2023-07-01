import { Link } from 'react-router-dom';

import { HeaderProfile, Navbar } from './components';
import './Header.css';

export default function Header() {
  return (
    <header className='app-header'>
      <Link to="/">
        <h1>Dentisalud</h1>
      </Link>
      <div className="app-header-right">
        <HeaderProfile />
        <Navbar />
      </div>
    </header>
  );
}
