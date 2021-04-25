import './ItemCount.css';
import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function ItemCount(prop) {
  const [button, setButton] = useState(false);

  return (
    <div className="contador">
      {!button && (
        <div className="contador-container">
          <Button size="tiny" color="vk" onClick={prop.onDecrease}>
            -
          </Button>
          <p className="cant-product">{prop.cant}</p>
          <Button size="tiny" color="vk" onClick={prop.onAdd}>
            +
          </Button>
        </div>
      )}
      <div>
        {button && (
          <Link to="/cart">
            <Button color="vk" className="button-to-cart">
              Terminar mi compra
            </Button>
          </Link>
        )}
      </div>
      <div>
        <Button
          color="linkedin"
          className="button-add-to-cart"
          disabled={prop.cant < 1 || button}
          onClick={() => setButton(true)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
