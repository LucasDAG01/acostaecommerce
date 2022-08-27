import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartItem = ({ id, name, quantity, price }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = (id) => {
    removeItem(id);
  };

  return (
    <div>
      <h2 className="ItemCartItem">{name}</h2>
      <p className="InfoCartItem">Cantidad: {quantity}</p>
      <p className="InfoCartItem">Precio x Unidad: ${price}</p>
      <p className="InfoCartItem">Subtotal: ${price * quantity}</p>
      <h3 className="ItemDelete">
        <button className="Button" onClick={() => handleRemove(id)}>
          Borrar Producto
        </button>
      </h3>
    </div>
  );
};

export default CartItem;
