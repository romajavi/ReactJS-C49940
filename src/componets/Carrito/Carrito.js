import React from 'react';
import { useCart } from '../../context/CartContex';
import { Link } from 'react-router-dom';

import './Carrito.css';

const Carrito = () => {
  const { cartItems, removeItemFromCart, clearCart, getTotalQuantity, getTotalPrice } = useCart();

  return (
    <div className="carrito-container">
      {cartItems.length === 0 ? (
        <div className="carrito-vacio">
          <h2 className='titulo'> No hay productos en el carrito :| </h2>
          <Link className='button3' to="/">Volver al inicio</Link>
        </div>
      ) : (
        <div className="carrito-con-productos">
          <h2 className='titulo'> Tu carrito de compras </h2>
          <ul className="lista">
            {cartItems.map((item) => (
              <li className="producto" key={item.id}>
                <img className="imagen" src={item.image} alt={item.name} />
                <p className="texto nombre">{item.name}</p>
                <p className="texto">Cantidad: {item.quantity}</p>
                <p className="texto">Precio c/u: ${item.price}</p>
                <button className='button1' onClick={() => removeItemFromCart(item.id)}>X</button>
              </li>
            ))}
          </ul>
          <div className="resumencart">
            <p>Total Cantidad: {getTotalQuantity()}</p>
            <p>Total Precio: ${getTotalPrice()}</p>
            <button className='button1' onClick={clearCart}>Limpiar Carrito</button>
            <Link className='button2' to="/checkout">Continuar Compra</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;