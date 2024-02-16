import React, { useState } from "react";
import "../ItemCount/ItemCount.css";

const ItemCount = ({ stock, initial, onAdd, isVisible }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count); // Llama a la función para actualizar la cantidad en el componente padre
  };

  return isVisible ? (
    <div className="item-count">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  ) : null;
};

export default ItemCount;