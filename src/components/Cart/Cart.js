import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import './Cart.css';

function Cart() {
  const context = useContext(CartContext);
  const items = context.getItems();
  const totalItems = items.reduce((total, current) => total + current.cant, 0);

  return (
    <div className="cart">
      <h1>Carrito de compras</h1>
      <span>Cantidad de articulos: {totalItems}</span>
    </div>
  );
}

export default Cart;
