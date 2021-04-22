import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';
import Velas from './views/Categorias/Velas';
import Macetas from './views/Categorias/Macetas';
import Capilar from './views/Categorias/Capilar';

function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/">
          <h1 className="h1">Sol Azul</h1>
          <h2 className="h2">Tienda Sustentable</h2>
        </Link>
        <NavBar />
        <Switch>
          <Route path="/" exact component={ItemListContainer} />
          <Route path="/velas" exact component={Velas} />
          <Route path="/macetas" exact component={Macetas} />
          <Route path="/capilar" exact component={Capilar} />
          <Route path="/item/:id" component={ItemDetailContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
