import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCart } from '../../context/CartContex'; // Importa useCart

import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const { addItemToCart } = useCart(); // Usa useCart en lugar de useContext(CartContext)

  const handleAddToCart = (count) => {
    setSelectedQuantity(count);
    const productToAdd = { ...product, quantity: count };
    addItemToCart(productToAdd);
  };

  return (
    <div className="item-detail">
      <img className="product-image" src={product.image} alt={product.name} />
      <div className="text">
        <h2>{product.name}</h2>
        <p>{product.detail}</p>
        <p>${product.price}</p>
        {selectedQuantity > 0 ? (
          <>
            <Link className="button-finish" to="/cart">
              Ir al carrito
            </Link>
            <Link className="button-finish" to="/">
              Continuar Comprando
            </Link>
          </>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} isVisible />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;