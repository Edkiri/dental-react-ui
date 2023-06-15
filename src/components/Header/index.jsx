import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>Dentisalud</h1>
      </Link>
      <Link to="/signup">
        <h4>Registro</h4>
      </Link>
    </header>
  );
}
