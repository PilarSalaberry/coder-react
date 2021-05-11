import React, { useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    db.collection('productos')
      .orderBy('nombre')
      .onSnapshot((querySnapshot) => {
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        if (categoryId) {
          setItems(
            docs.filter((elem) => {
              return elem.categoryId.toString() === categoryId.toString();
            })
          );
        } else {
          setItems(docs);
        }
      });
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
