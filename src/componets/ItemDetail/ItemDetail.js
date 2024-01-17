// components/ItemDetail/ItemDetail.js
import React from 'react';

const ItemDetail = ({ product, onCloseDetail }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="item-detail">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <p>{product.detail}</p>
      <button onClick={onCloseDetail}>Cerrar Detalle</button>
    </div>
  );
};

export default ItemDetail;
