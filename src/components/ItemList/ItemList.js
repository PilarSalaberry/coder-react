import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ data }) => {
  return (
    <div className="item-container">
      {console.log(data)}
      {data.map((item) => {
        return <Item data={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;
