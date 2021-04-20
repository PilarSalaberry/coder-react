import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { Data } from '../../Data/Data';

function ItemDetailContainer(match) {
  const data = Data;
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const getItems = new Promise((resolve, reject) => {
    const prod = data.find((elem) => {
      return elem.id === match.match.params.id;
    });
    setTimeout(() => {
      setItem(prod);
      resolve({ item });
    });
  }, 2000);

  useEffect(() => {
    getItems.then((data) => {
      setItem(data);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, [loading]);

  return (
    <div className="container-detail">
      {!loading && <ItemDetail data={item} />}
    </div>
  );
}

export default ItemDetailContainer;
