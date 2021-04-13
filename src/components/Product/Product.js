import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

const Product = ({ data }) => (
  <Card>
    <img src={data.imagen} />
    <Card.Content>
      <Card.Header>{data.nombre}</Card.Header>
      <Card.Meta>
        <span className="date">{data.precio}</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
);

export default Product;
