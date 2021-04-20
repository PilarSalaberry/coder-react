import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <div className="nav">
      <ul className="list">
        <li>
          <a href="/#" className="item">
            Inicio
          </a>
        </li>

        <li>
          <a href="/#" className="item">
            About
          </a>
        </li>
        <li>
          <a href="/#" className="item">
            Contacto
          </a>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
