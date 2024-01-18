import React from 'react';
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetail from './componets/ItemDetail/ItemDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path="/:category" element={<ItemListContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

