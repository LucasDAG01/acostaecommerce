import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/ItemCount/ItemCount";
function App() {
  const handleOnAdd = (quantity) => {
    console.log(`cantidad:  ${quantity}`);
  };

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Productos" />
      <Counter stock={15} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
