import React, { useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  const getData = async () => {
    db.collection('productos').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    });
  };
  useEffect(() => {
    getData();
    let filterItems = items;
    if (!!categoryId) {
      filterItems = items.filter((elem) => {
        return elem.categoryId.toString() === categoryId.toString();
      });
      setItems(filterItems);
      console.log(filterItems);
    }
  }, [categoryId]);

  return (
    <div>
      <div className="container">
        {items.length ? (
          <ItemList data={items} />
        ) : (
          <h2>No hay productos en esta categoría</h2>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
