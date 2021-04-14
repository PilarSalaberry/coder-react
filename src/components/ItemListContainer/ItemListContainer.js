import React, { Component } from 'react';
import './itemListContainer.css';
import ItemList from '../ItemList/ItemList';
import { Data } from '../../Data/Data';

class ItemListContainer extends Component {
  constructor() {
    super();
    this.state = {
      ciclo: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ciclo: Data,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <div className="container"></div>
        <ItemList data={this.state.ciclo} />
      </div>
    );
  }
}

export default ItemListContainer;
