import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getData = async () => {
    db.collection('productos').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      const product = docs.find((elem) => {
        return elem.id === id;
      });
      setItem(product);
      setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-detail">
      {!loading && <ItemDetail data={item} />}
    </div>
  );
};

export default ItemDetailContainer;
