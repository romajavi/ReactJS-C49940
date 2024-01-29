// ItemDetailContainer.js

import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetailContainer/ItemDetailContainer.css';
import { useNavigate } from 'react-router-dom';

const ItemDetailContainer = ({ product, onCloseDetail }) => {
  const [isItemCountVisible, setItemCountVisibility] = useState(true);
  const navigate = useNavigate();

  if (!product) {
    return null;
  }

  const handleAddToCart = (count) => {
    console.log(`Agregado al carrito: ${count} ${product.name}`);
  };

  const handleGoBack = () => {
    navigate(`/products/${product.category}`);
  };

  return (
    <div className="item-detail custom-detail-card">
      <h3>{product.name}</h3>
      <img
        src={product.image}
        alt={product.name}
      />
      <p>${product.price}</p>
      <p>{product.detail}</p>

      {isItemCountVisible && (
        <ItemCount
          stock={product.stock}
          initial={1}
          onAdd={handleAddToCart}
          isVisible={isItemCountVisible}
        />
      )}
      <button onClick={onCloseDetail}>Cerrar Detalle</button>
    </div>
  );
};

export default ItemDetailContainer;
