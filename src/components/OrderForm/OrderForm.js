import React, { useState } from 'react';
import { Input, Item } from 'semantic-ui-react';
import './OrderForm.css';
import { Button } from 'semantic-ui-react';
import { db } from '../../firebase';

function OrderForm() {
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
            focus
            placeholder="Nombre Completo"
            name="nombrecompleto"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">Telefono</label>
          <Input
            focus
            placeholder="Telefono"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">E-mail</label>
          <Input
            focus
            placeholder="hola@ejemplo.com"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">Fecha</label>
          <Input focus type="text" name="date" onChange={handleChange} />
        </div>
        <div className="field">
          <label className="label">Total</label>
          <Input focus type="text" name="total" onChange={handleChange} />
        </div>
        <Button>Enviar Orden</Button>
      </form>
    </div>
  );
}

export default OrderForm;
