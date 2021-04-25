import React, { useState } from 'react';
import './itemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ data }) {
  const [cant, setCant] = useState(0);

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
          <ItemCount onAdd={onAdd} onDecrease={onDecrease} cant={cant} />
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
