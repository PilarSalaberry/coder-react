import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
  return (
    <div className="nav">
      <CartWidget />
      <ul className="list">
        <li>
          <a href="/#" className="item">
            Inicio
          </a>
        </li>
        <li>
          <a href="/#" className="item">
            Cemento
          </a>
        </li>
        <li>
          <a href="/#" className="item">
            Piedras
          </a>
        </li>
        <li>
          <a href="/#" className="item">
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
