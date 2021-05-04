import React, { createContext, useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [item, setItem] = useState([]);

  const getItems = () => {
    return item;
  };

  const addItem = (newItem) => {
    if (!item.some((elem) => elem.id === newItem.id)) {
      setItem((currentState) => [...currentState, newItem]);
    } else {
      alert('El producto ya existe en el carrito');
    }
  };

  const value = { item, setItem };

  return (
    <CartContext.Provider value={{ value, addItem, getItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
