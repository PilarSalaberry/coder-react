import React from 'react';
import './itemListContainer.css';

function ItemListContainer(props) {
  return (
    <div className="container">
      <p className="greet">{props.greeting}</p>
    </div>
  );
}

export default ItemListContainer;
