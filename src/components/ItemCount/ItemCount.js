import './ItemCount.css';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class ItemCount extends Component {
  constructor() {
    super();

    this.state = {
      count: 1,
      stock: 10,
    };
  }

  handleIncrement = () => {
    if (this.state.count < this.state.stock) {
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="contador">
        <h2 className="product">Producto</h2>
        <p className="number">{this.state.count}</p>
        <div className="buttons">
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.handleIncrement}
          >
            +
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={this.handleDecrement}
          >
            -
          </Button>
        </div>
        <button
          className="add"
          onClick={() =>
            alert('Agregaste ' + this.state.count + ' productos al carrito')
          }
        >
          Agregar al carrito
        </button>
      </div>
    );
  }
}
