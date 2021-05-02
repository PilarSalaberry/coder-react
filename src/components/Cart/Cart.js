import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import './Cart.css';

function Cart() {
  /* eslint-disable no-unused-vars */
  const [item, setItem] = useContext(CartContext);
  const totalItems = item.reduce((total, current) => total + current.cant, 0);

  return (
    <div className="cart">
      <h1>Carrito de compras</h1>
      <span>Cantidad de articulos: {totalItems}</span>
    </div>
  );
}

export default Cart;
