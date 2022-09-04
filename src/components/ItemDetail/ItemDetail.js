import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const { addItem, getProductQuantity } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);

    const productToAdd = {
      id,
      name,
      price,
      quantity,
    };

    addItem(productToAdd);
  };

  const productQuantity = getProductQuantity(id);

  return (
    <div
      className="card shadow-sm text-bg-dark mb-3"
      style={{ width: "25rem" }}
    >
      <header>
        <h2 className="card-title">{name}</h2>
      </header>
      <img className="card-img-top img-fluid" src={img} alt={name} />
      <div className="card-body">
        <h3 className="Info">{category}</h3>
        <h3 className="Info">Descripción: {description}</h3>
        <h3 className="card-text">Precio: ${price}</h3>
        <h3 className="card-text">Stock: {stock}</h3>
        <footer className="ItemFooter">
          {quantityToAdd === 0 ? (
            <ItemCount
              onAdd={handleOnAdd}
              stock={stock}
              initial={productQuantity}
            />
          ) : (
            <Link to="/cart" className="btn btn-sm btn-danger">
              Finalizar compra
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
};

export default ItemDetail;
