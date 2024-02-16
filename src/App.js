// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import Carrito from './componets/Carrito/Carrito';
import Checkout from './componets/Checkout/Checkout';  // Agregué la importación del componente Checkout
import { CartProvider } from './context/CartContex';

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
            <Route path="/products/:category" element={<ItemListContainer />} />
            <Route path="/product/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />  {/* Agregué la ruta para Checkout */}
          </Routes>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;