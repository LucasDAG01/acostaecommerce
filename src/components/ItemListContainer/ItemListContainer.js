import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{greeting}</h1>

          <ItemList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
