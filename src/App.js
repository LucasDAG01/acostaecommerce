import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <div className="container text-center">
            <div className="row justify-content-center">
              <Routes>
                <Route
                  path="/"
                  element={<ItemListContainer greeting="Productos" />}
                />
                <Route
                  path="/category/:categoryId"
                  element={<ItemListContainer greeting="Listado" />}
                />
                <Route
                  path="/detail/:productId"
                  element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
