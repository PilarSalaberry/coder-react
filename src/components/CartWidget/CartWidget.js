import React, { useContext } from 'react';
import './cartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../CartContext/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const context = useContext(CartContext);
  const cant = context.getQuantity();
  return (
    cant > 0 && (
      <div className="cart-icon">
        <Link to="/cart">
          <FontAwesomeIcon
            className="shopping-cart-icon"
            icon={faShoppingCart}
          />
          <p className="number-cart">{cant}</p>
        </Link>
      </div>
    )
  );
}

export default CartWidget;
