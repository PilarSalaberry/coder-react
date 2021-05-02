import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/CartContext/CartContext';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Link to="/">
            <h1 className="h1">Sol Azul</h1>
            <h2 className="h2">Tienda Sustentable</h2>
          </Link>
          <NavBar />
        </header>
        <Switch>
          <CartProvider>
            <Route path="/" exact component={ItemListContainer} />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
          </CartProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
