import React from 'react';
import './cartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className="cart-icon" onClick={() => alert('Carrito')}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}

export default CartWidget;
