import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";

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
          <ul>
            {products.map((prod) => (
              <li key={prod.id}>{prod.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
