import React, { useEffect, useState } from 'react';
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { Data } from '../../Data/Data';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
  const [ciclo, setCiclo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    let c = Data;
    if (!!id) {
      c = c.filter((elem) => {
        return elem.categoria.toString() === id.toString();
      });
    }
    setTimeout(() => {
      setCiclo(c);
    }, 2000);
  }, [id]);

  return (
    <div>
      <div className="container">
        {ciclo.length ? (
          <ItemList data={ciclo} />
        ) : (
          <h2>No hay productos en esta categoría</h2>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
