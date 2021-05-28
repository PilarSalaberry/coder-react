import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [item, setItem] = useState([]);

  const emptyCart = () => {
    setItem([]);
  };

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

  const getTotalAmount = () => {
    const total = item.reduce(
      (total, current) => total + current.precio * current.cant,
      0
    );
    return total;
  };

  const getQuantity = () => {
    return item.reduce((total, current) => total + current.cant, 0);
  };

  const removeItem = (id) => {
    const products = item.filter(
      (elem) => elem.id.toString() !== id.toString()
    );
    setItem(products);
  };

  const value = { item, setItem };

  return (
    <CartContext.Provider
      value={{
        value,
        addItem,
        getItems,
        getQuantity,
        removeItem,
        getTotalAmount,
        emptyCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
