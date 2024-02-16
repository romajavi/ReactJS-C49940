import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";

import '../ItemListContainer/ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { category } = useParams();

  const handleSelectProduct = (productId, count) => {
    const selected = products.find((product) => product.id === productId);
    setSelectedProduct(selected);
    console.log(`Producto seleccionado: ${selected.name}, Cantidad: ${count}`);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    let consulta;
    let productosRef = collection(db, "productos");

    if (category) {
      consulta = query(productosRef, where("category", "==", category));
    } else {
      consulta = productosRef;
    }

    getDocs(consulta)
      .then((respuesta) => {
        let productosDb = respuesta.docs.map((producto) => {
          return { id: producto.id, ...producto.data() };
        });

        setProducts(productosDb);
      })
      .catch((error) => console.log(error));
  }, [category]);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="Container">
      <h2>{greeting}</h2>
      {category && <h3>{category}</h3>}

      <ItemList products={filteredProducts} onSelectProduct={handleSelectProduct} />

      {selectedProduct && (
        <ItemDetailContainer product={selectedProduct} onCloseDetail={handleCloseDetail} />
      )}
    </div>
  );
};

export default ItemListContainer;