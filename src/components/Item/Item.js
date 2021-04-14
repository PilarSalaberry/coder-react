import React from 'react';
import { Card } from 'semantic-ui-react';
import Logo from '../../Data/img/Maceta1.jpeg';
import './item.css';

const Item = ({ data }) => (
  <Card className="card">
    <img src={Logo} className="imgMaceta" alt="Maceta" />
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
