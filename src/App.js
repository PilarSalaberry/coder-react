import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="app">
      <h1 className="h1">Sol Azul | Macetas Artesanales</h1>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
