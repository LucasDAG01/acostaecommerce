import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, getQuantity, getTotal } = useContext(CartContext);

  const totalQuantity = getQuantity();
  const total = getTotal();

  if (totalQuantity === 0) {
    return <h1>Carrito Vacio</h1>;
  }

  return (
    <div>
      <h1>Carro de Compras</h1>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 className="text-success p-1">Total: ${total}</h3>
      <button
        onClick={() => clearCart()}
        className="btn btn-sm btn-secondary me-3"
      >
        Vaciar Carrito
      </button>
      <Link
        className="btn btn-sm btn-danger"
        style={{ color: "white" }}
        to="/checkout"
      >
        Comprar
      </Link>
    </div>
  );
};

export default Cart;
