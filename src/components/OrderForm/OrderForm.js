import React, { useState, useContext, useEffect } from 'react';
import { Input, Button, Message } from 'semantic-ui-react';
import './OrderForm.css';
import { db } from '../../firebase';
import { CartContext } from '../../CartContext/CartContext';

function OrderForm() {
  const context = useContext(CartContext);
  const totalAmount = context.getTotalAmount();
  const itemsCart = context.getItems();
  const [items, setItems] = useState([]);
  const [orderSent, setOrderSent] = useState(false);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    db.collection('productos').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    });
  }, []);

  const getDate = () => {
    let date = new Date();
    return (
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    );
  };

  const [order, setOrder] = useState({
    nombrecompleto: '',
    telefono: '',
    email: '',
    emailConfirm: '',
    date: getDate(),
    total: totalAmount,
    detalle: itemsCart,
  });

  const stockUpdate = () => {
    itemsCart.forEach((item) => {
      const product = items.find((elem) => {
        return elem.id === item.id;
      });

      const updatedStock = product.stock - item.cant;
      const newProduct = db
        .collection('productos')
        .doc(item.id)
        .update({ stock: updatedStock });
    });
  };

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    let a;
    e.preventDefault();
    try {
      a = await db.collection('ordenes').add(order);
      stockUpdate();
      setOrderSent(true);
      context.emptyCart();
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <div>
      {!orderSent ? (
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
              name="telefono"
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
            <label className="label">Confirma tu email</label>
            <Input
              className="input"
              focus
              placeholder="hola@ejemplo.com"
              type="email"
              name="emailConfirm"
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
      ) : (
        <div>
          <Message positive>
            <Message.Header>
              <h1>Orden enviada!</h1>
              <p>Tu numero de compra es {orderId}</p>
            </Message.Header>
          </Message>
        </div>
      )}
    </div>
  );
}

export default OrderForm;
