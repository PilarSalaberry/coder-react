import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Dropdown, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav">
      <Menu secondary>
        <NavLink exact to="/">
          <Menu.Item>Inicio</Menu.Item>
        </NavLink>
        <Dropdown text="Productos" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Header>Categorias</Dropdown.Header>
            <NavLink exact to="/categoria/1">
              <Dropdown.Item>Macetas</Dropdown.Item>
            </NavLink>
            <NavLink exact to="/categoria/2">
              <Dropdown.Item>Velas de Soja</Dropdown.Item>
            </NavLink>
            <NavLink exact to="/categoria/3">
              <Dropdown.Item>Cuidado Capilar</Dropdown.Item>
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
      <CartWidget />
    </div>
  );
}

export default NavBar;
