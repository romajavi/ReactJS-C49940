import React from 'react';
import './ItemList.css';

const ItemList = ({ products, onSelectProduct }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="item-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image" 
          />
          <h3>{product.name}</h3>
          <p>Disponibles: {product.stock}</p>
          <button onClick={() => onSelectProduct(product.id)}>Detalle</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;