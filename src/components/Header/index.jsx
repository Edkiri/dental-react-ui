import { Link } from 'react-router-dom';

import HeaderUserProfile from './HeaderUserProfile';
import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Dentisalud</h1>
      </Link>

      <HeaderUserProfile />
    </header>
  );
}
