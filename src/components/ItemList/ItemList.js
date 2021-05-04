import React from 'react';
import Item from '../Item/Item';
import './itemList.css';
import { Link } from 'react-router-dom';

const ItemList = ({ data }) => {
  return (
    <div className="item-container">
      {data.map((item) => {
        return (
          <Link to={`/item/${item.id}`} key={item.id}>
            <Item data={item} key={item.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default ItemList;
