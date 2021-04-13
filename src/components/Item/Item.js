import React, { Component } from 'react';
import { Data } from '../../Data/Data';
import Product from '../Product/Product';

class Item extends Component {
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
      <div className="product-container">
        {this.state.ciclo.map((data) => {
          return <Product data={data} key={data.id} />;
        })}
      </div>
    );
  }
}

export default Item;
