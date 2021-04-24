import React from 'react';
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Dropdown, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav">
      <Menu>
        <Menu.Item>Inicio</Menu.Item>
        <Dropdown text="Productos" pointing className="link item">
          <Dropdown.Menu>
            <Dropdown.Header>Categorias</Dropdown.Header>
            <NavLink exact to="/category/1">
              <Dropdown.Item>Macetas</Dropdown.Item>
            </NavLink>
            <NavLink exact to="/category/2">
              <Dropdown.Item>Velas de Soja</Dropdown.Item>
            </NavLink>
            <NavLink exact to="/category/3">
              <Dropdown.Item>Cuidado Capilar</Dropdown.Item>
            </NavLink>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item>Contacto</Menu.Item>
      </Menu>
      <CartWidget />
    </div>
  );
}

export default NavBar;
