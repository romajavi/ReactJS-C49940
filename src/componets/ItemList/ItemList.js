import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ products, onSelectProduct }) => {
  return (
    <div className="item-list">
      {products.map((product) => (
        <div key={product.id} className="item-card">
          <Link to={`/product/${product.id}`} className="item-link">
            <img
              src={product.image}
              alt={product.name}
              className="product-image" 
            />
            <h3>{product.name}</h3>
          </Link>
          <p>Disponibles: {product.stock}</p>
          <Link to={`/product/${product.id}`} className="detail-link">
            Ver Detalle
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;