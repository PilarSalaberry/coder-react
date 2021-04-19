import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './itemDetail.css';

const ItemDetail = ({ data }) => {
  return (
    <div className="product-card">
      <div className="product-tumb">
        <img src={data.image} alt="Maceta" />
      </div>
      <div className="product-details">
        <h2 className="h2-product">{data.nombre}</h2>
        <p className="p-product">{data.descripcion}</p>
        <p className="p-product">{data.info}</p>
        <div className="product-bottom-details">
          <div className="product-price">{'$' + data.precio}</div>
          <div className="product-links">
            <a href="./" className="a-links">
              <FontAwesomeIcon icon={faHeart} />
            </a>
            <a href="./" className="a-links">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
