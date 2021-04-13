import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Item from './components/Item/Item';

function App() {
  return (
    <div className="app">
      <h1 className="h1">Sol Azul | Macetas Artesanales</h1>
      <NavBar />
      <ItemListContainer greeting="Bienvenid@s!" />
      <ItemCount />
      <Item />
    </div>
  );
}

export default App;
