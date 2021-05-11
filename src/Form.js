import React, { useState } from 'react';
import { db } from './firebase';
import './App.css';

function Form() {
  const [producto, setProducto] = useState({
    nombre: '',
    image: '',
    precio: 0,
    descripcion: '',
    info: '',
    stock: 0,
    categoryId: 0,
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('productos').add(producto);
      console.log('upload success');
    } catch (error) {
      console.log(error);
    }
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-label">
        <label>Nombre</label>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="input-label">
        <label>CategoryId</label>
        <input
          type="text"
          placeholder="categoryId"
          name="categoryId"
          onChange={handleChange}
          className="input"
        />
      </div>
      <div className="input-label">
        <label>Image</label>
        <input
          type="text"
          placeholder="image"
          name="image"
          onChange={handleChange}
        />
      </div>
      <div className="input-label">
        <label>Precio</label>
        <input
          type="text"
          placeholder="precio"
          name="precio"
          onChange={handleChange}
        />
      </div>
      <div className="input-label">
        <label>Stock</label>
        <input
          type="text"
          placeholder="stock"
          name="stock"
          onChange={handleChange}
        />
      </div>
      <div className="input-label">
        <label>Info</label>
        <textarea name="info" onChange={handleChange}></textarea>
      </div>
      <div className="input-label">
        <label>Descripcion</label>
        <textarea name="descripcion" onChange={handleChange}></textarea>
      </div>
      <button type="submit">Cargar</button>
    </form>
  );
}
export default Form;
