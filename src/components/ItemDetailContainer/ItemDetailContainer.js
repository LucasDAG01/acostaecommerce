import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ addItem }) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getProductsById(productId)
      .then((response) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <h1>Cargando..</h1>;
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} addItem={addItem} />
    </div>
  );
};

export default ItemDetailContainer;
