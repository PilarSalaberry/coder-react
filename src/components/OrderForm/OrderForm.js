import React, { useState, useContext } from 'react';
import { Input } from 'semantic-ui-react';
import './OrderForm.css';
import { Button } from 'semantic-ui-react';
import { db } from '../../firebase';
import { CartContext } from '../../CartContext/CartContext';

function OrderForm() {
  const context = useContext(CartContext);
  const totalAmount = context.getTotalAmount();

  const [order, setOrder] = useState({
    nombrecompleto: '',
    telefono: '',
    email: '',
    date: '',
    total: '',
  });

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const getDate = () => {
    let date = new Date();
    return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('ordenes').add(order);
      console.log('upload success');
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <div>
      <form className="form-checkout" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Nombre Completo</label>
          <Input
            className="input"
            focus
            placeholder="Nombre Completo"
            name="nombrecompleto"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">Telefono</label>
          <Input
            className="input"
            focus
            placeholder="Telefono"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">E-mail</label>
          <Input
            className="input"
            focus
            placeholder="hola@ejemplo.com"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">Fecha</label>
          <Input
            className="input"
            focus
            type="text"
            name="date"
            readOnly
            onChange={handleChange}
            value={getDate()}
          />
        </div>
        <div className="field">
          <label className="label">Total</label>
          <Input
            className="input"
            focus
            name="total"
            value={totalAmount}
            onChange={handleChange}
            readOnly
          />
        </div>
        <Button
          className="btn-form"
          type="submit"
          color="linkedin"
          size="large"
        >
          Enviar Orden
        </Button>
      </form>
    </div>
  );
}

export default OrderForm;
