import React from 'react';
import './item.css';
import { Card, Image } from 'semantic-ui-react';

const Item = ({ data }) => (
  <Card className="card">
    <Image src={data.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{'$' + data.precio}</Card.Header>
      <Card.Meta>
        <span className="date">{data.nombre}</span>
      </Card.Meta>
      <Card.Description>{data.descripcion}</Card.Description>
    </Card.Content>
  </Card>
);

export default Item;
