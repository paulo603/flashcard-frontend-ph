import { Link } from 'react-router-dom'

import './styles.scss';

export function Navbar() {
  return(
    <nav>
      <h2>Nitro sound e PH lava rápido</h2>

      <ul>
      <Link to="/">
        <li>Home</li>
      </Link>

      <Link to="sobremim">
        <li>Sobre mim</li>
      </Link>

      <Link to="/trabalho">
        <li>Trabalho</li>
      </Link>

      <Link to="/lema">
        <li>Lema</li>
      </Link>

      </ul>
    </nav>
  );
}