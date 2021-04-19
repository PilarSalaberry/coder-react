import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import About from './Views/About/About';
import Home from './Views/Home/Home';
import Contact from './Views/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div className="app">
        <h1 className="h1">Sol Azul | Macetas Artesanales</h1>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <ItemDetailContainer />
      </div>
    </Router>
  );
}

export default App;
