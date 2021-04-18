import React from 'react';
import { Card } from 'semantic-ui-react';
import './item.css';

const Item = ({ data }) => (
  <Card className="card">
    <img src={data.image} className="imgMaceta" alt="Maceta" />
    <Card.Content>
      <Card.Header>{data.nombre}</Card.Header>
      <Card.Meta>
        <span className="date">{data.precio}</span>
      </Card.Meta>
      <Card.Description>{data.description}</Card.Description>
    </Card.Content>
  </Card>
);

export default Item;
