import React, { useState, useContext } from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext/CartContext';

function ItemDetail({ data }) {
  const [cant, setCant] = useState(0);
  const [item, setItem] = useContext(CartContext);

  function onAdd() {
    if (data.stock > cant) {
      setCant(cant + 1);
    }
  }
  function onDecrease() {
    if (cant > 0) {
      setCant(cant - 1);
    }
  }
  function addItem() {
    if (item.some((elem) => elem.id === data.id)) {
      alert('el producto ya existe en el carrito');
    } else {
      const newItem = {
        nombre: data.nombre,
        precio: data.precio,
        cant: cant,
        id: data.id.toString(),
      };
      setItem((currentState) => [...currentState, newItem]);
    }
  }

  return (
    <div className="product-card">
      <div className="product-tumb">
        <img src={data.image} alt="Producto" />
      </div>
      <div className="product-details">
        <h2 className="h2-product">{data.nombre}</h2>
        <p className="p-product">{data.descripcion}</p>
        <p className="p-product">{data.info}</p>
        <div className="product-bottom-details">
          <div className="product-price">{'$' + data.precio}</div>
          <ItemCount
            onAdd={onAdd}
            onDecrease={onDecrease}
            addItem={addItem}
            cant={cant}
          />
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
