import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbar />

      <ItemListContainer greeting="buenas aca va la lista en el futuro" />
    </div>
  );
}

export default App;
