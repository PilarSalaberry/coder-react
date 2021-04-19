import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Card, Image } from 'semantic-ui-react';
import './itemDetail.css';

const ItemDetail = ({ data }) => {
  return (
    <Card className="card">
      <Image src={data.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{'$' + data.precio}</Card.Header>
        <Card.Meta>
          <span className="date">{data.nombre}</span>
        </Card.Meta>
        <Card.Description>{data.descripcion}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href="google.com" className="a-links">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <a href="google.com" className="a-links">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
      </Card.Content>
    </Card>
  );
};
export default ItemDetail;
