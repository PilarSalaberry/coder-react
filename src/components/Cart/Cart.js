import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import './Cart.css';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

function Cart() {
  const context = useContext(CartContext);
  const items = context.getItems();
  const totalAmount = context.getTotalAmount();
  /* const totalAmount = items.reduce(
    (total, current) => total + current.precio,
    0
  );
 */
  return items.length ? (
    <div className="cart">
      {items.map((elem) => {
        return (
          <div className="cart-element" key={elem.id}>
            <h4>Producto: {elem.nombre}</h4>
            <p>Precio (unidad): {elem.precio}</p>
            <p>Cantidad: {elem.cant}</p>
            <Button
              size="tiny"
              color="vk"
              onClick={() => {
                context.removeItem(elem.id);
              }}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <div className="cart-total">
        <h4>
          TOTAL:
          <NumberFormat
            value={totalAmount.toFixed(2)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </h4>
      </div>
      <Link to="/orderform">
        <Button size="large" color="vk">
          Comprar!
        </Button>
      </Link>
    </div>
  ) : (
    <div className="cart">
      <p>No hay productos en el carrito</p>
      <Link to="/">
        <Button size="small" color="vk">
          Ir a inicio
        </Button>
      </Link>
    </div>
  );
}

export default Cart;
