import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import image1 from '../../Data/img/Maceta1.jpeg';

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: '1',
        nombre: 'Maceta 1',
        precio: 500,
        tipo: 'Piedras',
        descripcion: 'Alto: 11cm, Diametro: 11cm, Circunferencia: 34cm',
        image: image1,
      });
    }, 2000);
  });

  useEffect(() => {
    getItems.then((data) => {
      setItem(data);
      setLoading(false);
    });
  }, [loading]);

  return <div>{!loading && <ItemDetail data={item} />}</div>;
}

export default ItemDetailContainer;
