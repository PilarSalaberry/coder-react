import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav">
      <ul className="list">
        <NavLink activeClassName="active" exact to="/">
          <li>
            <a href="/#" className="item">
              Inicio
            </a>
          </li>
        </NavLink>
        <NavLink activeClassName="active" exact to="/about">
          <li>
            <a href="/#" className="item">
              About
            </a>
          </li>
        </NavLink>
        <NavLink activeClassName="active" exact to="/contact">
          <li>
            <a href="/#" className="item">
              Contacto
            </a>
          </li>
        </NavLink>
      </ul>
      <CartWidget />
    </div>
  );
}

export default NavBar;
