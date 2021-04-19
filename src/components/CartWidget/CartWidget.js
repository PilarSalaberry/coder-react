import React from 'react';
import './cartWidget.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function CartWidget() {
  return (
    <div className="cart-icon" onClick={() => alert('Carrito')}>
      <ShoppingCartIcon />
    </div>
  );
}

export default CartWidget;
