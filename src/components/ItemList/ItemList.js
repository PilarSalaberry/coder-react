import React from 'react';
import Item from '../Item/Item';
import './itemList.css';

const ItemList = ({ data }) => {
  return (
    <div className="item-container">
      {data.map((item) => {
        return <Item data={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
