// components/ItemList/ItemList.js
import React from 'react';
import './ItemList.css';  // Asegúrate de tener tus estilos CSS para ItemList

const ItemList = ({ products, onSelectProduct }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="item-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <button onClick={() => onSelectProduct(product.id)}>Detalle</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
