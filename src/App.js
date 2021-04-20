import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/">
          <h1 className="h1">Sol Azul | Macetas Artesanales</h1>
        </Link>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/category/:id" exact component={ItemListContainer} />
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
