import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css';

const ItemDetail = ({ product, onCloseDetail }) => {
  const [isItemCountVisible, setItemCountVisibility] = useState(true);

  if (!product) {
    return null;
  }

  const handleAddToCart = (count) => {
    console.log(`Agregado al carrito: ${count} ${product.name}`);
  };

  return (
    <div className="item-detail">
      <h3>{product.name}</h3>
      <img src={product.image} alt={product.name} />
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

export default ItemDetail;