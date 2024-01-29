import React, { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { useNavigate, useParams, Link } from 'react-router-dom';
import '../ItemListContainer/ItemListContainer.css';
import productsData from './ProductsData';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const { category } = useParams();

  const handleSelectProduct = (productId) => {
    const selected = products.find((product) => product.id === productId);
    setSelectedProduct(selected);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
    navigate(`/products/${category}`);
  };

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="Container">
      <h2>{greeting}</h2>
      {category && <h3>{category}</h3>}
      <ItemCount stock={5} initial={1} OnAdd={() => {}} />

      <ItemList products={filteredProducts} onSelectProduct={handleSelectProduct} />

      {selectedProduct && (
        <ItemDetailContainer product={selectedProduct} onCloseDetail={handleCloseDetail} />
      )}
    </div>
  );
};

export default ItemListContainer;
