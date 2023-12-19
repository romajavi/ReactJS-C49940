import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItenListContainer' 

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;