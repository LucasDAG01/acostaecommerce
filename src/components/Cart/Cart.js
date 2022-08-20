import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

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
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">
        Comprar
      </button>
    </div>
  );
};

export default Cart;
