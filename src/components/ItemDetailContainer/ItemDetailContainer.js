import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = ({ addItem }) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getDoc(doc(db, "products", productId))
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <h1>Cargando..</h1>;
  }

  return (
    <div className="col-6">
      <h1> Detalle: </h1>
      <ItemDetail {...product} addItem={addItem} />
    </div>
  );
};

export default ItemDetailContainer;
