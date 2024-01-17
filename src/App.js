// App.js
import React from 'react';
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemCount from './componets/ItemCount/ItemCount';

function App() {
  const handleAddToCart = (count) => {
    console.log(`Se agregarán ${count} elementos al carrito`);
    // Lógica para agregar al carrito aquí
  };

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemCount stock={5} initial={1} onAdd={handleAddToCart} />
    </div>
  );
}

export default App;
