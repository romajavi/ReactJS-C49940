import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path="/products/:category" element={<ItemListContainer />} />
          <Route path="/product/:productId" element={<ItemDetailContainer />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;