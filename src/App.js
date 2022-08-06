import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Counter from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const handleOnAdd = (quantity) => {
    console.log(`cantidad:  ${quantity}`);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Counter stock={10} onAdd={handleOnAdd} />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Productos" />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:productId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
